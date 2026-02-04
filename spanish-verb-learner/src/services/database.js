import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, '../../data/spanish-verbs.db');
let db;

export function getDb() {
  if (!db) {
    db = new Database(dbPath);
    db.pragma('journal_mode = WAL');
  }
  return db;
}

export function initDatabase() {
  const db = getDb();

  // Verbs table
  db.exec(`
    CREATE TABLE IF NOT EXISTS verbs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      spanish TEXT NOT NULL UNIQUE,
      english TEXT NOT NULL,
      verb_type TEXT NOT NULL,
      irregular INTEGER DEFAULT 0,
      frequency_rank INTEGER
    )
  `);

  // Conjugations table
  db.exec(`
    CREATE TABLE IF NOT EXISTS conjugations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      verb_id INTEGER NOT NULL,
      tense TEXT NOT NULL,
      person TEXT NOT NULL,
      form TEXT NOT NULL,
      FOREIGN KEY (verb_id) REFERENCES verbs(id),
      UNIQUE(verb_id, tense, person)
    )
  `);

  // Challenge sentences table
  db.exec(`
    CREATE TABLE IF NOT EXISTS challenges (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      verb_id INTEGER NOT NULL,
      tense TEXT NOT NULL,
      person TEXT NOT NULL,
      english_sentence TEXT NOT NULL,
      spanish_answer TEXT NOT NULL,
      alt_answers TEXT,
      hint TEXT,
      FOREIGN KEY (verb_id) REFERENCES verbs(id)
    )
  `);

  // User progress tracking
  db.exec(`
    CREATE TABLE IF NOT EXISTS progress (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      week_number INTEGER NOT NULL,
      verb_id INTEGER NOT NULL,
      current_day INTEGER DEFAULT 1,
      started_at TEXT DEFAULT CURRENT_TIMESTAMP,
      completed_at TEXT,
      FOREIGN KEY (verb_id) REFERENCES verbs(id)
    )
  `);

  // Daily responses
  db.exec(`
    CREATE TABLE IF NOT EXISTS responses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      progress_id INTEGER NOT NULL,
      challenge_id INTEGER NOT NULL,
      day_number INTEGER NOT NULL,
      user_answer TEXT,
      is_correct INTEGER,
      feedback TEXT,
      responded_at TEXT DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (progress_id) REFERENCES progress(id),
      FOREIGN KEY (challenge_id) REFERENCES challenges(id)
    )
  `);

  // Pattern analysis
  db.exec(`
    CREATE TABLE IF NOT EXISTS patterns (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      tense TEXT NOT NULL,
      person TEXT NOT NULL,
      total_attempts INTEGER DEFAULT 0,
      correct_attempts INTEGER DEFAULT 0,
      common_mistakes TEXT,
      UNIQUE(tense, person)
    )
  `);

  // Settings table
  db.exec(`
    CREATE TABLE IF NOT EXISTS settings (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    )
  `);

  // Initialize default settings
  const insertSetting = db.prepare('INSERT OR IGNORE INTO settings (key, value) VALUES (?, ?)');
  insertSetting.run('current_week', '0');
  insertSetting.run('current_verb_id', '0');
  insertSetting.run('is_active', 'true');
  insertSetting.run('daily_hour', '14');
  insertSetting.run('timezone', 'America/Costa_Rica');

  // Initialize pattern tracking for all combinations
  const tenses = ['presente', 'preterito', 'futuro', 'imperfecto'];
  const persons = ['yo', 'tu', 'el', 'nosotros', 'ellos'];
  const insertPattern = db.prepare('INSERT OR IGNORE INTO patterns (tense, person) VALUES (?, ?)');

  for (const tense of tenses) {
    for (const person of persons) {
      insertPattern.run(tense, person);
    }
  }

  return db;
}

// Verb operations
export function getAllVerbs() {
  return getDb().prepare('SELECT * FROM verbs ORDER BY frequency_rank').all();
}

export function getVerbById(id) {
  return getDb().prepare('SELECT * FROM verbs WHERE id = ?').get(id);
}

export function getVerbConjugations(verbId) {
  return getDb().prepare('SELECT * FROM conjugations WHERE verb_id = ?').all(verbId);
}

export function getConjugationGrid(verbId) {
  const conjugations = getVerbConjugations(verbId);
  const grid = {};

  for (const conj of conjugations) {
    if (!grid[conj.person]) grid[conj.person] = {};
    grid[conj.person][conj.tense] = conj.form;
  }

  return grid;
}

// Challenge operations
export function getChallengesForVerb(verbId) {
  return getDb().prepare('SELECT * FROM challenges WHERE verb_id = ?').all(verbId);
}

export function getChallengeById(id) {
  return getDb().prepare('SELECT * FROM challenges WHERE id = ?').get(id);
}

export function getRandomChallenge(verbId, excludeIds = []) {
  const placeholders = excludeIds.length ? excludeIds.map(() => '?').join(',') : '-1';
  const query = `
    SELECT * FROM challenges
    WHERE verb_id = ? AND id NOT IN (${placeholders})
    ORDER BY RANDOM() LIMIT 1
  `;
  return getDb().prepare(query).get(verbId, ...excludeIds);
}

// Progress operations
export function getCurrentProgress() {
  return getDb().prepare(`
    SELECT p.*, v.spanish, v.english
    FROM progress p
    JOIN verbs v ON p.verb_id = v.id
    ORDER BY p.id DESC LIMIT 1
  `).get();
}

export function startNewWeek(verbId) {
  const db = getDb();
  const currentWeek = parseInt(getSetting('current_week')) + 1;

  db.prepare('INSERT INTO progress (week_number, verb_id) VALUES (?, ?)').run(currentWeek, verbId);
  setSetting('current_week', currentWeek.toString());
  setSetting('current_verb_id', verbId.toString());

  return getCurrentProgress();
}

export function recordResponse(progressId, challengeId, dayNumber, userAnswer, isCorrect, feedback) {
  const db = getDb();

  db.prepare(`
    INSERT INTO responses (progress_id, challenge_id, day_number, user_answer, is_correct, feedback)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run(progressId, challengeId, dayNumber, userAnswer, isCorrect ? 1 : 0, feedback);

  // Update progress day
  db.prepare('UPDATE progress SET current_day = ? WHERE id = ?').run(dayNumber + 1, progressId);

  // Update pattern stats
  const challenge = getChallengeById(challengeId);
  if (challenge) {
    db.prepare(`
      UPDATE patterns
      SET total_attempts = total_attempts + 1,
          correct_attempts = correct_attempts + ?
      WHERE tense = ? AND person = ?
    `).run(isCorrect ? 1 : 0, challenge.tense, challenge.person);
  }
}

export function getWeekResponses(progressId) {
  return getDb().prepare(`
    SELECT r.*, c.english_sentence, c.spanish_answer, c.tense, c.person
    FROM responses r
    JOIN challenges c ON r.challenge_id = c.id
    WHERE r.progress_id = ?
    ORDER BY r.day_number
  `).all(progressId);
}

export function getUsedChallengeIds(progressId) {
  return getDb().prepare('SELECT challenge_id FROM responses WHERE progress_id = ?')
    .all(progressId)
    .map(r => r.challenge_id);
}

// Pattern operations
export function getPatternStats() {
  return getDb().prepare('SELECT * FROM patterns WHERE total_attempts > 0').all();
}

export function getWeakestPatterns(limit = 5) {
  return getDb().prepare(`
    SELECT *,
           CASE WHEN total_attempts > 0
                THEN CAST(correct_attempts AS REAL) / total_attempts
                ELSE 1 END as success_rate
    FROM patterns
    WHERE total_attempts > 0
    ORDER BY success_rate ASC
    LIMIT ?
  `).all(limit);
}

export function getStrongestPatterns(limit = 5) {
  return getDb().prepare(`
    SELECT *,
           CASE WHEN total_attempts > 0
                THEN CAST(correct_attempts AS REAL) / total_attempts
                ELSE 0 END as success_rate
    FROM patterns
    WHERE total_attempts >= 3
    ORDER BY success_rate DESC
    LIMIT ?
  `).all(limit);
}

// Overall stats
export function getOverallStats() {
  const db = getDb();

  const totalResponses = db.prepare('SELECT COUNT(*) as count FROM responses').get().count;
  const correctResponses = db.prepare('SELECT COUNT(*) as count FROM responses WHERE is_correct = 1').get().count;
  const weeksCompleted = db.prepare('SELECT COUNT(*) as count FROM progress WHERE completed_at IS NOT NULL').get().count;
  const currentStreak = calculateStreak();

  return {
    totalResponses,
    correctResponses,
    accuracy: totalResponses > 0 ? correctResponses / totalResponses : 0,
    weeksCompleted,
    currentStreak
  };
}

function calculateStreak() {
  const responses = getDb().prepare(`
    SELECT DATE(responded_at) as date, is_correct
    FROM responses
    ORDER BY responded_at DESC
    LIMIT 30
  `).all();

  let streak = 0;
  for (const r of responses) {
    if (r.is_correct) streak++;
    else break;
  }
  return streak;
}

// Settings
export function getSetting(key) {
  const row = getDb().prepare('SELECT value FROM settings WHERE key = ?').get(key);
  return row ? row.value : null;
}

export function setSetting(key, value) {
  getDb().prepare('INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)').run(key, value);
}

export function getAllSettings() {
  const rows = getDb().prepare('SELECT * FROM settings').all();
  const settings = {};
  for (const row of rows) {
    settings[row.key] = row.value;
  }
  return settings;
}

// History
export function getProgressHistory(limit = 10) {
  return getDb().prepare(`
    SELECT p.*, v.spanish, v.english,
           (SELECT COUNT(*) FROM responses r WHERE r.progress_id = p.id AND r.is_correct = 1) as correct_count,
           (SELECT COUNT(*) FROM responses r WHERE r.progress_id = p.id) as total_count
    FROM progress p
    JOIN verbs v ON p.verb_id = v.id
    ORDER BY p.started_at DESC
    LIMIT ?
  `).all(limit);
}

export function completeWeek(progressId) {
  getDb().prepare('UPDATE progress SET completed_at = CURRENT_TIMESTAMP WHERE id = ?').run(progressId);
}

// Get next verb to learn
export function getNextVerb() {
  const db = getDb();

  // Get verbs not yet studied, ordered by frequency
  const nextVerb = db.prepare(`
    SELECT v.* FROM verbs v
    WHERE v.id NOT IN (SELECT verb_id FROM progress)
    ORDER BY v.frequency_rank
    LIMIT 1
  `).get();

  if (nextVerb) return nextVerb;

  // If all verbs studied, get the one with lowest accuracy that was studied longest ago
  return db.prepare(`
    SELECT v.*,
           (SELECT AVG(CASE WHEN r.is_correct THEN 1.0 ELSE 0.0 END)
            FROM responses r
            JOIN progress p ON r.progress_id = p.id
            WHERE p.verb_id = v.id) as accuracy
    FROM verbs v
    ORDER BY accuracy ASC,
             (SELECT MAX(completed_at) FROM progress WHERE verb_id = v.id) ASC
    LIMIT 1
  `).get();
}

// Pending challenge tracking
export function setPendingChallenge(challengeId) {
  setSetting('pending_challenge_id', challengeId.toString());
}

export function getPendingChallenge() {
  const id = getSetting('pending_challenge_id');
  return id ? getChallengeById(parseInt(id)) : null;
}

export function clearPendingChallenge() {
  setSetting('pending_challenge_id', '0');
}
