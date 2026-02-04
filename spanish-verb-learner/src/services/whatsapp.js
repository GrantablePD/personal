import twilio from 'twilio';

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const fromNumber = process.env.TWILIO_WHATSAPP_NUMBER;
const toNumber = process.env.USER_PHONE;

export async function sendWhatsAppMessage(message) {
  try {
    const result = await client.messages.create({
      body: message,
      from: fromNumber,
      to: toNumber
    });
    console.log(`WhatsApp sent: ${result.sid}`);
    return result;
  } catch (error) {
    console.error('WhatsApp error:', error.message);
    throw error;
  }
}

export async function sendDailyChallenge(challenge, dayNumber, weekNumber, verbSpanish) {
  const message = `📚 *Day ${dayNumber}/7 - Week ${weekNumber}*
Verb: *${verbSpanish}*

Translate to Spanish:
"${challenge.english_sentence}"

Reply with your answer!`;

  return sendWhatsAppMessage(message);
}

export async function sendFeedback(isCorrect, userAnswer, correctAnswer, feedback, score) {
  let message;

  if (isCorrect) {
    message = `✅ *Correct!*

Your answer: "${userAnswer}"

${score.correct}/${score.total} this week (${Math.round(score.correct/score.total*100)}%)`;
  } else {
    message = `❌ *Not quite*

Your answer: "${userAnswer}"
Correct: "${correctAnswer}"

💡 ${feedback}

${score.correct}/${score.total} this week`;
  }

  return sendWhatsAppMessage(message);
}

export async function sendWeekComplete(verbSpanish, weekScore, overallAccuracy) {
  const message = `🎉 *Week Complete!*

Verb: *${verbSpanish}*
Score: ${weekScore.correct}/${weekScore.total} (${Math.round(weekScore.correct/weekScore.total*100)}%)

Overall accuracy: ${Math.round(overallAccuracy * 100)}%

📧 Check your email for the detailed weekly report!`;

  return sendWhatsAppMessage(message);
}

export async function sendWelcome() {
  const message = `🇪🇸 *¡Bienvenido to Spanish Verb Learner!*

Here's how it works:
• Every Monday you'll get a verb grid by email
• Each day you'll get a sentence to translate
• Reply with your Spanish translation
• I'll tell you if you're correct and track your progress

Let's master those Spanish verbs! 💪`;

  return sendWhatsAppMessage(message);
}

export async function sendTestMessage() {
  return sendWhatsAppMessage('🧪 Test message from Spanish Verb Learner - WhatsApp is working!');
}
