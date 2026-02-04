import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const fromEmail = process.env.SENDGRID_FROM_EMAIL;
const toEmail = process.env.USER_EMAIL;

export async function sendEmail(subject, htmlContent, textContent) {
  try {
    const result = await sgMail.send({
      to: toEmail,
      from: fromEmail,
      subject: subject,
      text: textContent || htmlContent.replace(/<[^>]*>/g, ''),
      html: htmlContent
    });
    console.log(`Email sent: ${subject}`);
    return result;
  } catch (error) {
    console.error('Email error:', error.message);
    throw error;
  }
}

export async function sendVerbGridEmail(verb, conjugationGrid, weekNumber) {
  const subject = `🇪🇸 Week ${weekNumber}: ${verb.spanish} (${verb.english})`;

  const tenses = ['presente', 'preterito', 'futuro', 'imperfecto'];
  const persons = ['yo', 'tu', 'el', 'nosotros', 'ellos'];
  const personLabels = {
    'yo': 'Yo (I)',
    'tu': 'Tú (you)',
    'el': 'Él/Ella (he/she)',
    'nosotros': 'Nosotros (we)',
    'ellos': 'Ellos (they)'
  };
  const tenseLabels = {
    'presente': 'Presente',
    'preterito': 'Pretérito',
    'futuro': 'Futuro',
    'imperfecto': 'Imperfecto'
  };

  let tableRows = '';
  for (const person of persons) {
    const cells = tenses.map(tense => {
      const form = conjugationGrid[person]?.[tense] || '-';
      return `<td style="padding: 12px 16px; border: 1px solid #e2e8f0;">${form}</td>`;
    }).join('');
    tableRows += `<tr>
      <td style="padding: 12px 16px; border: 1px solid #e2e8f0; font-weight: bold; background: #f8fafc;">${personLabels[person]}</td>
      ${cells}
    </tr>`;
  }

  const headerCells = tenses.map(t =>
    `<th style="padding: 12px 16px; border: 1px solid #e2e8f0; background: #3b82f6; color: white;">${tenseLabels[t]}</th>`
  ).join('');

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1e293b; }
    .container { max-width: 700px; margin: 0 auto; padding: 20px; }
    h1 { color: #3b82f6; margin-bottom: 8px; }
    .verb-type { color: #64748b; font-size: 14px; margin-bottom: 24px; }
    table { border-collapse: collapse; width: 100%; margin: 24px 0; }
    .tips { background: #fef3c7; border-left: 4px solid #f59e0b; padding: 16px; margin: 24px 0; }
    .footer { color: #64748b; font-size: 12px; margin-top: 32px; padding-top: 16px; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="container">
    <h1>${verb.spanish}</h1>
    <p style="font-size: 20px; color: #64748b; margin-top: 0;">${verb.english}</p>
    <p class="verb-type">${verb.irregular ? '⚠️ Irregular verb' : '✓ Regular verb'} • Type: -${verb.verb_type}</p>

    <table>
      <thead>
        <tr>
          <th style="padding: 12px 16px; border: 1px solid #e2e8f0; background: #1e40af; color: white;">Person</th>
          ${headerCells}
        </tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table>

    <div class="tips">
      <strong>💡 This Week's Focus</strong><br>
      You'll practice <strong>${verb.spanish}</strong> in different tenses and with different subjects.
      Each day, I'll send you a WhatsApp message with a sentence to translate.
      ${verb.irregular ? '<br><br>⚠️ This is an irregular verb - pay attention to the stem changes!' : ''}
    </div>

    <p>Good luck this week! 🍀</p>

    <div class="footer">
      Spanish Verb Learner • Week ${weekNumber} of 100
    </div>
  </div>
</body>
</html>
  `;

  return sendEmail(subject, htmlContent);
}

export async function sendWeeklyReportEmail(verb, responses, patternStats, overallStats, weekNumber) {
  const subject = `📊 Week ${weekNumber} Report: ${verb.spanish}`;

  const correctCount = responses.filter(r => r.is_correct).length;
  const totalCount = responses.length;
  const accuracy = totalCount > 0 ? (correctCount / totalCount * 100).toFixed(0) : 0;

  // Build response details
  let responseRows = '';
  for (const r of responses) {
    const icon = r.is_correct ? '✅' : '❌';
    responseRows += `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">Day ${r.day_number}</td>
        <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${r.english_sentence}</td>
        <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${r.user_answer || '-'}</td>
        <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${icon}</td>
      </tr>
    `;
  }

  // Pattern analysis
  const weakPatterns = patternStats.filter(p => p.success_rate < 0.7).slice(0, 3);
  const strongPatterns = patternStats.filter(p => p.success_rate >= 0.8 && p.total_attempts >= 3).slice(0, 3);

  let patternSection = '';
  if (weakPatterns.length > 0) {
    const weakList = weakPatterns.map(p =>
      `<li><strong>${p.tense} + ${p.person}</strong>: ${Math.round(p.success_rate * 100)}% (${p.correct_attempts}/${p.total_attempts})</li>`
    ).join('');
    patternSection += `
      <div style="background: #fef2f2; border-left: 4px solid #ef4444; padding: 16px; margin: 16px 0;">
        <strong>🎯 Areas to Focus On</strong>
        <ul style="margin: 8px 0 0 0; padding-left: 20px;">${weakList}</ul>
      </div>
    `;
  }

  if (strongPatterns.length > 0) {
    const strongList = strongPatterns.map(p =>
      `<li><strong>${p.tense} + ${p.person}</strong>: ${Math.round(p.success_rate * 100)}%</li>`
    ).join('');
    patternSection += `
      <div style="background: #f0fdf4; border-left: 4px solid #22c55e; padding: 16px; margin: 16px 0;">
        <strong>💪 Your Strengths</strong>
        <ul style="margin: 8px 0 0 0; padding-left: 20px;">${strongList}</ul>
      </div>
    `;
  }

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1e293b; }
    .container { max-width: 700px; margin: 0 auto; padding: 20px; }
    .score-box { background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 24px; border-radius: 12px; text-align: center; margin: 24px 0; }
    .score-number { font-size: 48px; font-weight: bold; }
    .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 24px 0; }
    .stat-box { background: #f8fafc; padding: 16px; border-radius: 8px; text-align: center; }
    .stat-value { font-size: 24px; font-weight: bold; color: #3b82f6; }
    .stat-label { font-size: 12px; color: #64748b; }
    table { width: 100%; border-collapse: collapse; margin: 16px 0; }
    th { background: #f1f5f9; padding: 10px; text-align: left; }
    .footer { color: #64748b; font-size: 12px; margin-top: 32px; padding-top: 16px; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="container">
    <h1>📊 Week ${weekNumber} Complete!</h1>
    <p style="color: #64748b;">Verb: <strong>${verb.spanish}</strong> (${verb.english})</p>

    <div class="score-box">
      <div class="score-number">${accuracy}%</div>
      <div>${correctCount} out of ${totalCount} correct</div>
    </div>

    <div class="stats-grid">
      <div class="stat-box">
        <div class="stat-value">${overallStats.weeksCompleted + 1}</div>
        <div class="stat-label">Weeks Completed</div>
      </div>
      <div class="stat-box">
        <div class="stat-value">${Math.round(overallStats.accuracy * 100)}%</div>
        <div class="stat-label">Overall Accuracy</div>
      </div>
      <div class="stat-box">
        <div class="stat-value">${overallStats.currentStreak}</div>
        <div class="stat-label">Current Streak</div>
      </div>
    </div>

    <h2>📝 This Week's Responses</h2>
    <table>
      <thead>
        <tr>
          <th>Day</th>
          <th>Challenge</th>
          <th>Your Answer</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        ${responseRows}
      </tbody>
    </table>

    ${patternSection}

    <h2>📈 Overall Progress</h2>
    <p>You've completed <strong>${overallStats.weeksCompleted + 1}</strong> out of 100 verbs!</p>
    <div style="background: #e2e8f0; border-radius: 9999px; height: 24px; overflow: hidden;">
      <div style="background: linear-gradient(90deg, #3b82f6, #8b5cf6); height: 100%; width: ${(overallStats.weeksCompleted + 1)}%; min-width: 2%;"></div>
    </div>

    <div class="footer">
      Spanish Verb Learner • Keep up the great work! 🇪🇸
    </div>
  </div>
</body>
</html>
  `;

  return sendEmail(subject, htmlContent);
}

export async function sendTestEmail() {
  const subject = '🧪 Test Email - Spanish Verb Learner';
  const htmlContent = `
    <div style="font-family: sans-serif; padding: 20px;">
      <h1>✅ Email is working!</h1>
      <p>Your Spanish Verb Learner email integration is set up correctly.</p>
    </div>
  `;
  return sendEmail(subject, htmlContent);
}
