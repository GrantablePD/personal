import { Router } from 'express';
import * as db from '../services/database.js';
import { getWeekScore } from '../services/evaluator.js';

const router = Router();

// Main dashboard
router.get('/', (req, res) => {
  const progress = db.getCurrentProgress();
  const responses = progress ? db.getWeekResponses(progress.id) : [];
  const stats = db.getOverallStats();
  const settings = db.getAllSettings();
  const weekScore = getWeekScore(responses);

  let verb = null;
  let conjugationGrid = null;

  if (progress) {
    verb = db.getVerbById(progress.verb_id);
    conjugationGrid = db.getConjugationGrid(progress.verb_id);
  }

  res.render('dashboard', {
    progress,
    verb,
    conjugationGrid,
    responses,
    weekScore,
    stats,
    settings,
    isActive: settings.is_active === 'true'
  });
});

// Verbs library
router.get('/verbs', (req, res) => {
  const verbs = db.getAllVerbs();
  const history = db.getProgressHistory(100);

  // Mark which verbs have been studied
  const studiedVerbIds = new Set(history.map(h => h.verb_id));
  const verbsWithStatus = verbs.map(v => ({
    ...v,
    studied: studiedVerbIds.has(v.id),
    accuracy: history.find(h => h.verb_id === v.id)?.correct_count /
              history.find(h => h.verb_id === v.id)?.total_count || null
  }));

  res.render('verbs', { verbs: verbsWithStatus });
});

// Single verb detail
router.get('/verbs/:id', (req, res) => {
  const verb = db.getVerbById(req.params.id);
  if (!verb) {
    return res.redirect('/verbs');
  }

  const conjugationGrid = db.getConjugationGrid(verb.id);
  const challenges = db.getChallengesForVerb(verb.id);

  res.render('verb-detail', { verb, conjugationGrid, challenges });
});

// Progress history
router.get('/history', (req, res) => {
  const history = db.getProgressHistory(50);
  const stats = db.getOverallStats();

  res.render('history', { history, stats });
});

// Pattern analysis
router.get('/patterns', (req, res) => {
  const patterns = db.getPatternStats();
  const weakest = db.getWeakestPatterns(10);
  const strongest = db.getStrongestPatterns(10);

  // Build matrix for visualization
  const tenses = ['presente', 'preterito', 'futuro', 'imperfecto'];
  const persons = ['yo', 'tu', 'el', 'nosotros', 'ellos'];
  const matrix = {};

  for (const person of persons) {
    matrix[person] = {};
    for (const tense of tenses) {
      const pattern = patterns.find(p => p.tense === tense && p.person === person);
      matrix[person][tense] = pattern ? {
        attempts: pattern.total_attempts,
        correct: pattern.correct_attempts,
        rate: pattern.total_attempts > 0 ? pattern.correct_attempts / pattern.total_attempts : null
      } : { attempts: 0, correct: 0, rate: null };
    }
  }

  res.render('patterns', { patterns, weakest, strongest, matrix, tenses, persons });
});

// Settings page
router.get('/settings', (req, res) => {
  const settings = db.getAllSettings();
  res.render('settings', { settings });
});

export default router;
