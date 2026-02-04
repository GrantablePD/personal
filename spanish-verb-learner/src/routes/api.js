import { Router } from 'express';
import * as db from '../services/database.js';
import { triggerDailyChallenge, triggerNewWeek, triggerWeekComplete } from '../services/scheduler.js';
import { sendTestMessage, sendWelcome } from '../services/whatsapp.js';
import { sendTestEmail } from '../services/email.js';

const router = Router();

// Get all verbs
router.get('/verbs', (req, res) => {
  const verbs = db.getAllVerbs();
  res.json(verbs);
});

// Get verb details with conjugations
router.get('/verbs/:id', (req, res) => {
  const verb = db.getVerbById(req.params.id);
  if (!verb) {
    return res.status(404).json({ error: 'Verb not found' });
  }

  const conjugations = db.getConjugationGrid(verb.id);
  const challenges = db.getChallengesForVerb(verb.id);

  res.json({ verb, conjugations, challenges });
});

// Get current progress
router.get('/progress', (req, res) => {
  const progress = db.getCurrentProgress();
  const responses = progress ? db.getWeekResponses(progress.id) : [];
  const stats = db.getOverallStats();
  const patterns = db.getPatternStats();

  res.json({ progress, responses, stats, patterns });
});

// Get progress history
router.get('/progress/history', (req, res) => {
  const history = db.getProgressHistory(20);
  res.json(history);
});

// Get pattern analysis
router.get('/patterns', (req, res) => {
  const patterns = db.getPatternStats();
  const weakest = db.getWeakestPatterns(5);
  const strongest = db.getStrongestPatterns(5);

  res.json({ patterns, weakest, strongest });
});

// Get settings
router.get('/settings', (req, res) => {
  const settings = db.getAllSettings();
  res.json(settings);
});

// Update settings
router.post('/settings', (req, res) => {
  const { key, value } = req.body;

  if (!key || value === undefined) {
    return res.status(400).json({ error: 'Key and value required' });
  }

  db.setSetting(key, value.toString());
  res.json({ success: true, key, value });
});

// Toggle active status
router.post('/toggle-active', (req, res) => {
  const current = db.getSetting('is_active');
  const newValue = current === 'true' ? 'false' : 'true';
  db.setSetting('is_active', newValue);
  res.json({ is_active: newValue === 'true' });
});

// Manual triggers
router.post('/trigger/challenge', async (req, res) => {
  try {
    const challenge = await triggerDailyChallenge();
    res.json({ success: true, challenge });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/trigger/new-week', async (req, res) => {
  try {
    const progress = await triggerNewWeek();
    res.json({ success: true, progress });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/trigger/complete-week', async (req, res) => {
  try {
    await triggerWeekComplete();
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Test integrations
router.post('/test/whatsapp', async (req, res) => {
  try {
    await sendTestMessage();
    res.json({ success: true, message: 'Test message sent!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/test/email', async (req, res) => {
  try {
    await sendTestEmail();
    res.json({ success: true, message: 'Test email sent!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/send-welcome', async (req, res) => {
  try {
    await sendWelcome();
    res.json({ success: true, message: 'Welcome message sent!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start learning (begins week 1)
router.post('/start', async (req, res) => {
  try {
    // Send welcome message
    await sendWelcome();

    // Start first week
    const progress = await triggerNewWeek();

    res.json({ success: true, progress, message: 'Learning started!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
