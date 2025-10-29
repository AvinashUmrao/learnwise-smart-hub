import { useEffect } from "react";
import { JeeQuizStart } from "@/components/quiz/JeeQuizStart";
import { QuizTaking } from "@/components/quiz/QuizTaking";
import { QuizResults } from "@/components/quiz/QuizResults";
import { QuizNavigation } from "@/components/quiz/QuizNavigation";
import { useQuiz } from "@/contexts/QuizContext";
import { buildCalibrationQuiz, buildAdaptiveQuiz, getCategory, getRating, ratingChangeFromPerformance, setRating, analyzePerformance, calibrationAssignment } from "@/lib/adaptive";
import { getJeeQuestionsBySubject, getJeeQuestionsByTopic, jeeQuestionBank } from "@/data/jeeQuestionBank";
import { addQuizAttempt, updateStreak, checkAndAwardBadges, getQuizHistory } from "@/lib/gamification";

type QuizStage = 'start' | 'taking' | 'results';

const JeeQuiz = () => {
  const { quizState, startQuizWithQuestions, selectAnswer, nextQuestion, previousQuestion, submitQuiz, resetQuiz } = useQuiz();

  const stage: QuizStage = !quizState ? 'start' : quizState.isCompleted ? 'results' : 'taking';

  useEffect(() => {
    if (quizState?.isCompleted && quizState.questions?.length) {
      const questionsAny = quizState.questions as any;
      const perf = analyzePerformance(questionsAny, quizState.answers.map(a => ({ selectedAnswer: a.selectedAnswer, timeTakenSec: a.timeTakenSec })));
      const subject = quizState.subject;
      
      if (quizState.mode === 'calibration') {
        const cat = calibrationAssignment(perf.correct);
        const initialMap: Record<string, number> = { Low: 100, Medium: 300, Best: 600 };
        setRating('jee', initialMap[cat], subject);
        const catKey = subject ? `adaptive_category_jee_${subject}` : 'adaptive_category_jee';
        localStorage.setItem(catKey, cat);
      } else {
        const delta = ratingChangeFromPerformance((perf.correct / perf.total) * 100);
        const currentRating = getRating('jee', subject);
        setRating('jee', currentRating + delta, subject);
        const catKey = subject ? `adaptive_category_jee_${subject}` : 'adaptive_category_jee';
        localStorage.setItem(catKey, getCategory('jee', subject));
      }
      
      // Gamification: Track quiz attempt
      const totalTime = quizState.answers.reduce((sum, a) => sum + (a.timeTakenSec || 0), 0);
      const quizAttempt = addQuizAttempt({
        subject: subject || 'general',
        quizType: quizState.quizType,
        score: perf.correct,
        totalQuestions: perf.total,
        accuracy: Math.round((perf.correct / perf.total) * 100),
        category: getCategory('jee', subject),
        rating: getRating('jee', subject),
        timeTaken: totalTime,
        difficulty: quizState.mode === 'calibration' ? 'Mixed' : 'Adaptive',
      });
      
      // Update streak
      const streakData = updateStreak();
      
      // Check and award badges
      const quizHistory = getQuizHistory();
      const newBadges = checkAndAwardBadges(quizAttempt, streakData, quizHistory);
      
      // Show badge notification if any earned
      if (newBadges.length > 0) {
        console.log('New badges earned:', newBadges);
      }
    }
  }, [quizState?.isCompleted]);

  const handleStart = (quizType: 'topic' | 'subject' | 'full', duration: number, subject?: string, topic?: string) => {
    let questionPool;
    let targetCount;
    let category;
    
    // Get questions based on quiz type
    if (quizType === 'full') {
      // Full syllabus: use all questions from all subjects
      questionPool = jeeQuestionBank;
      targetCount = 15;
      category = getCategory('jee'); // Use default category
    } else if (quizType === 'topic' && topic && subject) {
      questionPool = getJeeQuestionsByTopic(subject, topic);
      targetCount = 6;
      category = getCategory('jee', subject);
    } else if (subject) {
      questionPool = getJeeQuestionsBySubject(subject);
      targetCount = 12;
      category = getCategory('jee', subject);
    } else {
      return; // Invalid state
    }
    
    // Build adaptive quiz from the pool
    const questions = buildAdaptiveQuiz(questionPool as any, category, Math.min(targetCount, questionPool.length));
    
    startQuizWithQuestions({ 
      examName: 'jee', 
      quizType, 
      questions: questions as any, 
      durationMin: duration, 
      mode: 'adaptive', 
      subject 
    });
  };

  const handleCalibrationStart = (duration: number, subject: string) => {
    const questionPool = getJeeQuestionsBySubject(subject);
    const questions = buildCalibrationQuiz(questionPool as any);
    
    startQuizWithQuestions({ 
      examName: 'jee', 
      quizType: 'subject', 
      questions: questions as any, 
      durationMin: duration, 
      mode: 'calibration', 
      subject 
    });
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (quizState) {
      selectAnswer(quizState.currentQuestion, answerIndex);
    }
  };

  const handleNext = () => {
    if (quizState && quizState.currentQuestion < quizState.answers.length - 1) {
      nextQuestion();
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    previousQuestion();
  };

  const handleSubmit = () => {
    submitQuiz();
  };

  const handleRestart = () => {
    resetQuiz();
  };

  if (stage === 'start') {
    return <JeeQuizStart 
      onStart={handleStart} 
      onStartCalibration={handleCalibrationStart}
    />;
  }

  if (stage === 'results' && quizState && quizState.questions?.length) {
    const questions = quizState.questions;
    const answers = quizState.answers.map((ans, idx) => ({
      questionId: idx,
      selectedAnswer: ans.selectedAnswer ?? -1,
      isCorrect: ans.selectedAnswer === questions[idx].correctAnswer,
      timeTakenSec: ans.timeTakenSec
    }));
    return <QuizResults answers={answers} onRestart={handleRestart} />;
  }

  if (!quizState) return null;

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <QuizTaking
              currentQuestion={quizState.currentQuestion}
              selectedAnswer={quizState.answers[quizState.currentQuestion].selectedAnswer}
              timeLeft={quizState.timeLeft}
              onAnswerSelect={handleAnswerSelect}
              onNext={handleNext}
              onPrevious={handlePrevious}
            />
          </div>
          <div className="lg:col-span-1">
            <QuizNavigation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JeeQuiz;
