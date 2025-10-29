export type Category = 'Low' | 'Medium' | 'Best';
export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  subject: string;
  difficulty: Difficulty;
  topic?: string;
}

export interface QuizPerformance {
  correct: number;
  total: number;
  accuracyByDifficulty: Record<Difficulty, { correct: number; total: number }>;
  timePerQuestion: number[];
}

// Rating thresholds
export const categoryFromRating = (rating: number): Category => {
  if (rating >= 500) return 'Best';
  if (rating >= 200) return 'Medium';
  return 'Low';
};

export const initialRating = 200; // neutral start -> Medium

export const getRating = (exam: string, subject?: string): number => {
  const key = subject ? `adaptive_rating_${exam}_${subject}` : `adaptive_rating_${exam}`;
  const stored = localStorage.getItem(key);
  return stored ? parseInt(stored, 10) : initialRating;
};

export const setRating = (exam: string, rating: number, subject?: string) => {
  const key = subject ? `adaptive_rating_${exam}_${subject}` : `adaptive_rating_${exam}`;
  localStorage.setItem(key, String(Math.max(0, rating)));
};

export const getCategory = (exam: string, subject?: string): Category => categoryFromRating(getRating(exam, subject));

export const calibrationAssignment = (correct: number): Category => {
  if (correct <= 3) return 'Low';
  if (correct <= 6) return 'Medium';
  return 'Best';
};

export const ratingChangeFromPerformance = (percentage: number): number => {
  if (percentage >= 85) return 40; // Excellent
  if (percentage >= 70) return 20; // Good
  if (percentage >= 50) return 0; // Average
  if (percentage >= 30) return -20; // Poor
  return -40; // Very Poor
};

export const buildCalibrationQuiz = (bank: Question[]): Question[] => {
  const pick = (arr: Question[], n: number) => arr.sort(() => 0.5 - Math.random()).slice(0, Math.min(n, arr.length));
  const easy = bank.filter(q => q.difficulty === 'Easy');
  const med = bank.filter(q => q.difficulty === 'Medium');
  const hard = bank.filter(q => q.difficulty === 'Hard');
  return [...pick(easy, 3), ...pick(med, 3), ...pick(hard, 3)].sort(() => 0.5 - Math.random());
};

export const buildAdaptiveQuiz = (bank: Question[], category: Category, total: number): Question[] => {
  const weights: Record<Category, Record<Difficulty, number>> = {
    Low: { Easy: 0.7, Medium: 0.3, Hard: 0 },
    Medium: { Easy: 0.4, Medium: 0.4, Hard: 0.2 },
    Best: { Easy: 0.1, Medium: 0.3, Hard: 0.6 },
  };
  const target = weights[category];
  const counts: Record<Difficulty, number> = {
    Easy: Math.round(total * target.Easy),
    Medium: Math.round(total * target.Medium),
    Hard: Math.round(total * target.Hard),
  };
  // Fix rounding to ensure total matches
  const sum = counts.Easy + counts.Medium + counts.Hard;
  if (sum !== total) {
    // Adjust by adding to the largest weight bucket
    const order: Difficulty[] = ['Hard', 'Medium', 'Easy'];
    let diff = total - sum;
    for (const d of order) {
      if (diff === 0) break;
      counts[d] += Math.sign(diff);
      diff -= Math.sign(diff);
    }
  }
  const pool = {
    Easy: bank.filter(q => q.difficulty === 'Easy'),
    Medium: bank.filter(q => q.difficulty === 'Medium'),
    Hard: bank.filter(q => q.difficulty === 'Hard'),
  } as Record<Difficulty, Question[]>;
  const pick = (arr: Question[], n: number) => arr.sort(() => 0.5 - Math.random()).slice(0, Math.min(n, arr.length));
  return [
    ...pick(pool.Easy, counts.Easy),
    ...pick(pool.Medium, counts.Medium),
    ...pick(pool.Hard, counts.Hard),
  ].sort(() => 0.5 - Math.random());
};

export const analyzePerformance = (questions: Question[], selected: Array<{ selectedAnswer: number | null; timeTakenSec?: number }>): QuizPerformance => {
  const acc: QuizPerformance = {
    correct: 0,
    total: questions.length,
    accuracyByDifficulty: {
      Easy: { correct: 0, total: 0 },
      Medium: { correct: 0, total: 0 },
      Hard: { correct: 0, total: 0 },
    },
    timePerQuestion: [],
  };
  questions.forEach((q, i) => {
    const ans = selected[i];
    const isCorrect = ans?.selectedAnswer === q.correctAnswer;
    if (isCorrect) acc.correct += 1;
    acc.accuracyByDifficulty[q.difficulty].total += 1;
    if (isCorrect) acc.accuracyByDifficulty[q.difficulty].correct += 1;
    acc.timePerQuestion.push(ans?.timeTakenSec ?? 0);
  });
  return acc;
};

export const topicStrengths = (questions: Question[], selected: Array<{ selectedAnswer: number | null }>) => {
  const map = new Map<string, { correct: number; total: number }>();
  questions.forEach((q, i) => {
    const t = q.topic || q.subject;
    if (!map.has(t)) map.set(t, { correct: 0, total: 0 });
    const rec = map.get(t)!;
    rec.total += 1;
    if (selected[i]?.selectedAnswer === q.correctAnswer) rec.correct += 1;
  });
  return Array.from(map.entries()).sort((a, b) => (b[1].correct / b[1].total) - (a[1].correct / a[1].total));
};
