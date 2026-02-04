// Answer evaluation and feedback generation

const tenseNames = {
  'presente': 'present tense',
  'preterito': 'preterite (past)',
  'futuro': 'future tense',
  'imperfecto': 'imperfect'
};

const personNames = {
  'yo': 'first person singular (yo)',
  'tu': 'second person singular (tú)',
  'el': 'third person singular (él/ella)',
  'nosotros': 'first person plural (nosotros)',
  'ellos': 'third person plural (ellos)'
};

// Normalize text for comparison
function normalize(text) {
  return text
    .toLowerCase()
    .trim()
    // Normalize Spanish characters
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents for comparison
    .replace(/[¿¡?!.,;:'"]/g, '') // Remove punctuation
    .replace(/\s+/g, ' '); // Normalize spaces
}

// Check if two answers match (with some flexibility)
function answersMatch(userAnswer, correctAnswer, altAnswers = []) {
  const normalizedUser = normalize(userAnswer);
  const normalizedCorrect = normalize(correctAnswer);

  // Exact match (normalized)
  if (normalizedUser === normalizedCorrect) {
    return { match: true, exact: true };
  }

  // Check alternative answers
  const alts = altAnswers ? altAnswers.split('|').map(a => normalize(a)) : [];
  if (alts.some(alt => normalizedUser === alt)) {
    return { match: true, exact: true };
  }

  // Check if user answer contains the key correct parts
  const correctWords = normalizedCorrect.split(' ');
  const userWords = normalizedUser.split(' ');

  // Allow minor variations (missing articles, slightly different word order)
  const matchingWords = correctWords.filter(w => userWords.includes(w));
  const matchRatio = matchingWords.length / correctWords.length;

  if (matchRatio >= 0.85) {
    return { match: true, exact: false, close: true };
  }

  return { match: false, exact: false };
}

// Generate helpful feedback based on the mistake
export function evaluateAnswer(userAnswer, challenge) {
  if (!userAnswer || userAnswer.trim() === '') {
    return {
      isCorrect: false,
      feedback: "No answer provided. Try again!"
    };
  }

  const result = answersMatch(userAnswer, challenge.spanish_answer, challenge.alt_answers);

  if (result.match) {
    return {
      isCorrect: true,
      feedback: result.exact
        ? "Perfect!"
        : "Close enough! The exact answer was: " + challenge.spanish_answer
    };
  }

  // Generate specific feedback
  const feedback = generateFeedback(userAnswer, challenge);

  return {
    isCorrect: false,
    feedback
  };
}

function generateFeedback(userAnswer, challenge) {
  const correct = challenge.spanish_answer;
  const hint = challenge.hint;

  // Use hint if available
  if (hint) {
    return hint;
  }

  // Analyze the specific error
  const userNorm = normalize(userAnswer);
  const correctNorm = normalize(correct);

  // Check for common mistake patterns
  const userWords = userNorm.split(' ');
  const correctWords = correctNorm.split(' ');

  // Find the verb form in the correct answer (usually changes based on tense/person)
  const verbPatterns = {
    'presente': {
      'ar': { 'yo': 'o', 'tu': 'as', 'el': 'a', 'nosotros': 'amos', 'ellos': 'an' },
      'er': { 'yo': 'o', 'tu': 'es', 'el': 'e', 'nosotros': 'emos', 'ellos': 'en' },
      'ir': { 'yo': 'o', 'tu': 'es', 'el': 'e', 'nosotros': 'imos', 'ellos': 'en' }
    },
    'preterito': {
      'ar': { 'yo': 'é', 'tu': 'aste', 'el': 'ó', 'nosotros': 'amos', 'ellos': 'aron' },
      'er': { 'yo': 'í', 'tu': 'iste', 'el': 'ió', 'nosotros': 'imos', 'ellos': 'ieron' },
      'ir': { 'yo': 'í', 'tu': 'iste', 'el': 'ió', 'nosotros': 'imos', 'ellos': 'ieron' }
    },
    'futuro': {
      'all': { 'yo': 'é', 'tu': 'ás', 'el': 'á', 'nosotros': 'emos', 'ellos': 'án' }
    },
    'imperfecto': {
      'ar': { 'yo': 'aba', 'tu': 'abas', 'el': 'aba', 'nosotros': 'ábamos', 'ellos': 'aban' },
      'er': { 'yo': 'ía', 'tu': 'ías', 'el': 'ía', 'nosotros': 'íamos', 'ellos': 'ían' },
      'ir': { 'yo': 'ía', 'tu': 'ías', 'el': 'ía', 'nosotros': 'íamos', 'ellos': 'ían' }
    }
  };

  // Generic feedback with tense/person info
  const tenseName = tenseNames[challenge.tense] || challenge.tense;
  const personName = personNames[challenge.person] || challenge.person;

  // Check if it's a tense error vs conjugation error
  const feedbackOptions = [
    `Remember: For ${tenseName} with ${personName}, the verb ending changes accordingly.`,
    `Tip: In the ${tenseName}, pay attention to the verb ending for "${challenge.person}".`,
    `The ${tenseName} conjugation for ${personName} has a specific pattern - check the verb grid!`,
    `Review the ${tenseName} column in your verb grid for the correct ending.`
  ];

  return feedbackOptions[Math.floor(Math.random() * feedbackOptions.length)];
}

// Get score summary for the week
export function getWeekScore(responses) {
  const correct = responses.filter(r => r.is_correct).length;
  return {
    correct,
    total: responses.length,
    percentage: responses.length > 0 ? Math.round(correct / responses.length * 100) : 0
  };
}
