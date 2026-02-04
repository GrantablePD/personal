import cron from 'node-cron';
import * as db from './database.js';
import { sendDailyChallenge, sendWeekComplete } from './whatsapp.js';
import { sendVerbGridEmail, sendWeeklyReportEmail } from './email.js';
import { getWeekScore } from './evaluator.js';

// Costa Rica is UTC-6 (no daylight saving)
const TIMEZONE = 'America/Costa_Rica';

export function initScheduler() {
  const hour = parseInt(db.getSetting('daily_hour')) || 14;
  const isActive = db.getSetting('is_active') === 'true';

  if (!isActive) {
    console.log('Scheduler is paused');
    return;
  }

  // Daily challenge - every day at configured hour (Costa Rica time)
  // Cron format: minute hour * * * (every day)
  cron.schedule(`0 ${hour} * * *`, async () => {
    console.log('Running daily challenge job...');
    await runDailyChallenge();
  }, { timezone: TIMEZONE });

  // Weekly new verb - every Monday at configured hour (Costa Rica time)
  cron.schedule(`0 ${hour} * * 1`, async () => {
    console.log('Running weekly new verb job...');
    await startNewWeekJob();
  }, { timezone: TIMEZONE });

  console.log(`Scheduled: Daily challenges at ${hour}:00 ${TIMEZONE}`);
  console.log(`Scheduled: New verb email every Monday at ${hour}:00 ${TIMEZONE}`);
}

// Start a new week with a new verb
export async function startNewWeekJob() {
  try {
    // Complete previous week if exists
    const currentProgress = db.getCurrentProgress();
    if (currentProgress && !currentProgress.completed_at) {
      await completeCurrentWeek();
    }

    // Get next verb
    const nextVerb = db.getNextVerb();
    if (!nextVerb) {
      console.log('No more verbs to study!');
      return;
    }

    // Start new week
    const progress = db.startNewWeek(nextVerb.id);

    // Send verb grid email
    const conjugationGrid = db.getConjugationGrid(nextVerb.id);
    await sendVerbGridEmail(nextVerb, conjugationGrid, progress.week_number);

    console.log(`Started week ${progress.week_number} with verb: ${nextVerb.spanish}`);

    return progress;
  } catch (error) {
    console.error('Error starting new week:', error);
  }
}

// Send daily challenge
export async function runDailyChallenge() {
  try {
    const progress = db.getCurrentProgress();
    if (!progress) {
      console.log('No active week - starting new week first');
      await startNewWeekJob();
      return runDailyChallenge();
    }

    // Check if week is complete
    if (progress.current_day > 7) {
      console.log('Week already complete');
      return;
    }

    const verb = db.getVerbById(progress.verb_id);

    // Get challenges already used this week
    const usedChallengeIds = db.getUsedChallengeIds(progress.id);

    // Get a random challenge for this verb that hasn't been used
    const challenge = db.getRandomChallenge(progress.verb_id, usedChallengeIds);

    if (!challenge) {
      console.log('No more challenges available for this verb');
      return;
    }

    // Store pending challenge for response handling
    db.setPendingChallenge(challenge.id);

    // Send the challenge
    await sendDailyChallenge(challenge, progress.current_day, progress.week_number, verb.spanish);

    console.log(`Sent challenge for day ${progress.current_day}: ${challenge.english_sentence}`);

    return challenge;
  } catch (error) {
    console.error('Error sending daily challenge:', error);
  }
}

// Complete the current week
export async function completeCurrentWeek() {
  try {
    const progress = db.getCurrentProgress();
    if (!progress) return;

    const verb = db.getVerbById(progress.verb_id);
    const responses = db.getWeekResponses(progress.id);
    const weekScore = getWeekScore(responses);
    const overallStats = db.getOverallStats();
    const patternStats = db.getPatternStats();

    // Send week complete WhatsApp
    await sendWeekComplete(verb.spanish, weekScore, overallStats.accuracy);

    // Send detailed email report
    await sendWeeklyReportEmail(verb, responses, patternStats, overallStats, progress.week_number);

    // Mark week as complete
    db.completeWeek(progress.id);

    console.log(`Completed week ${progress.week_number}`);
  } catch (error) {
    console.error('Error completing week:', error);
  }
}

// Manual triggers (for testing/control panel)
export async function triggerDailyChallenge() {
  return runDailyChallenge();
}

export async function triggerNewWeek() {
  return startNewWeekJob();
}

export async function triggerWeekComplete() {
  return completeCurrentWeek();
}
