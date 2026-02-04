import { Router } from 'express';
import * as db from '../services/database.js';
import { evaluateAnswer, getWeekScore } from '../services/evaluator.js';
import { sendFeedback, sendWeekComplete } from '../services/whatsapp.js';
import { sendWeeklyReportEmail } from '../services/email.js';

const router = Router();

// Twilio WhatsApp webhook
router.post('/whatsapp', async (req, res) => {
  try {
    const { Body, From } = req.body;

    console.log(`📱 Received from ${From}: ${Body}`);

    // Check if there's a pending challenge
    const pendingChallenge = db.getPendingChallenge();
    const progress = db.getCurrentProgress();

    if (!pendingChallenge || !progress) {
      console.log('No pending challenge or active progress');
      // Send empty TwiML response
      res.type('text/xml').send('<Response></Response>');
      return;
    }

    // Evaluate the answer
    const { isCorrect, feedback } = evaluateAnswer(Body, pendingChallenge);

    // Record the response
    db.recordResponse(
      progress.id,
      pendingChallenge.id,
      progress.current_day,
      Body,
      isCorrect,
      feedback
    );

    // Clear pending challenge
    db.clearPendingChallenge();

    // Get updated week responses for score
    const responses = db.getWeekResponses(progress.id);
    const weekScore = getWeekScore(responses);

    // Send feedback
    await sendFeedback(
      isCorrect,
      Body,
      pendingChallenge.spanish_answer,
      feedback,
      weekScore
    );

    // Check if week is complete (day 7 answered)
    if (progress.current_day >= 7) {
      const verb = db.getVerbById(progress.verb_id);
      const overallStats = db.getOverallStats();
      const patternStats = db.getPatternStats();

      // Send week complete message
      await sendWeekComplete(verb.spanish, weekScore, overallStats.accuracy);

      // Send detailed email report
      await sendWeeklyReportEmail(verb, responses, patternStats, overallStats, progress.week_number);

      // Mark week as complete
      db.completeWeek(progress.id);

      console.log(`✅ Week ${progress.week_number} completed!`);
    }

    // Send empty TwiML response (we handle replies via API)
    res.type('text/xml').send('<Response></Response>');

  } catch (error) {
    console.error('Webhook error:', error);
    res.type('text/xml').send('<Response></Response>');
  }
});

// Health check
router.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

export default router;
