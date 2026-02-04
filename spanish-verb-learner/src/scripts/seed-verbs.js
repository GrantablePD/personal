// Seed the database with verbs, conjugations, and challenges
import 'dotenv/config';
import { initDatabase, getDb } from '../services/database.js';
import { verbs, conjugations } from '../data/verbs.js';
import { challenges, generateDefaultChallenges } from '../data/challenges.js';

console.log('🌱 Seeding database...\n');

// Initialize database
initDatabase();
const db = getDb();

// Clear existing data
db.exec('DELETE FROM challenges');
db.exec('DELETE FROM conjugations');
db.exec('DELETE FROM verbs');
console.log('✓ Cleared existing data');

// Insert verbs
const insertVerb = db.prepare(`
  INSERT INTO verbs (spanish, english, verb_type, irregular, frequency_rank)
  VALUES (?, ?, ?, ?, ?)
`);

const insertConjugation = db.prepare(`
  INSERT INTO conjugations (verb_id, tense, person, form)
  VALUES (?, ?, ?, ?)
`);

const insertChallenge = db.prepare(`
  INSERT INTO challenges (verb_id, tense, person, english_sentence, spanish_answer, alt_answers, hint)
  VALUES (?, ?, ?, ?, ?, ?, ?)
`);

let verbCount = 0;
let conjCount = 0;
let challCount = 0;

for (let i = 0; i < verbs.length; i++) {
  const verb = verbs[i];

  // Insert verb
  const result = insertVerb.run(
    verb.spanish,
    verb.english,
    verb.type,
    verb.irregular ? 1 : 0,
    i + 1  // frequency rank
  );

  const verbId = result.lastInsertRowid;
  verbCount++;

  // Insert conjugations
  const verbConj = conjugations[verb.spanish];
  if (verbConj) {
    for (const [tense, persons] of Object.entries(verbConj)) {
      for (const [person, form] of Object.entries(persons)) {
        insertConjugation.run(verbId, tense, person, form);
        conjCount++;
      }
    }
  }

  // Insert challenges
  const verbChallenges = challenges[verb.spanish];
  if (verbChallenges) {
    for (const ch of verbChallenges) {
      insertChallenge.run(
        verbId,
        ch.tense,
        ch.person,
        ch.english,
        ch.spanish,
        ch.alt || null,
        ch.hint || null
      );
      challCount++;
    }
  } else if (verbConj) {
    // Generate default challenges for verbs without custom ones
    const defaultChallenges = generateDefaultChallenges(verb, verbConj);
    for (const ch of defaultChallenges) {
      insertChallenge.run(
        verbId,
        ch.tense,
        ch.person,
        ch.english,
        ch.spanish,
        null,
        ch.hint
      );
      challCount++;
    }
  }

  process.stdout.write(`\r  Processing: ${verb.spanish.padEnd(15)} (${i + 1}/${verbs.length})`);
}

console.log('\n');
console.log(`✓ Inserted ${verbCount} verbs`);
console.log(`✓ Inserted ${conjCount} conjugations`);
console.log(`✓ Inserted ${challCount} challenges`);
console.log('\n🎉 Database seeded successfully!');

// Show sample data
console.log('\n📊 Sample data:');
const sampleVerb = db.prepare('SELECT * FROM verbs LIMIT 1').get();
console.log('  First verb:', sampleVerb);

const sampleConj = db.prepare('SELECT * FROM conjugations WHERE verb_id = ? LIMIT 4').all(sampleVerb.id);
console.log('  Sample conjugations:', sampleConj.map(c => `${c.tense}/${c.person}: ${c.form}`).join(', '));

const sampleChall = db.prepare('SELECT * FROM challenges WHERE verb_id = ? LIMIT 1').get(sampleVerb.id);
console.log('  Sample challenge:', sampleChall?.english_sentence, '→', sampleChall?.spanish_answer);
