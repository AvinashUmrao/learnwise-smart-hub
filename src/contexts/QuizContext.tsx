import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface QuizAnswer {
  questionId: number;
  selectedAnswer: number | null;
  markedForReview: boolean;
  isCorrect?: boolean;
}

interface QuizState {
  examName: string;
  quizType: 'topic' | 'subject' | 'full';
  currentQuestion: number;
  answers: QuizAnswer[];
  timeLeft: number;
  isCompleted: boolean;
}

interface QuizContextType {
  quizState: QuizState | null;
  startQuiz: (examName: string, quizType: 'topic' | 'subject' | 'full', totalQuestions: number, duration: number) => void;
  selectAnswer: (questionId: number, answerIndex: number) => void;
  markForReview: (questionId: number) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  goToQuestion: (index: number) => void;
  submitQuiz: () => void;
  resetQuiz: () => void;
  saveProgress: () => void;
  loadProgress: (examName: string) => boolean;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [quizState, setQuizState] = useState<QuizState | null>(null);

  useEffect(() => {
    if (quizState && !quizState.isCompleted) {
      const timer = setInterval(() => {
        setQuizState(prev => {
          if (!prev || prev.timeLeft <= 0) return prev;
          return { ...prev, timeLeft: prev.timeLeft - 1 };
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [quizState?.isCompleted]);

  useEffect(() => {
    if (quizState && quizState.timeLeft === 0 && !quizState.isCompleted) {
      submitQuiz();
    }
  }, [quizState?.timeLeft]);

  const startQuiz = (examName: string, quizType: 'topic' | 'subject' | 'full', totalQuestions: number, duration: number) => {
    const newState: QuizState = {
      examName,
      quizType,
      currentQuestion: 0,
      answers: Array.from({ length: totalQuestions }, (_, i) => ({
        questionId: i,
        selectedAnswer: null,
        markedForReview: false,
      })),
      timeLeft: duration * 60,
      isCompleted: false,
    };
    setQuizState(newState);
    localStorage.setItem(`quiz_${examName}_${quizType}`, JSON.stringify(newState));
  };

  const selectAnswer = (questionId: number, answerIndex: number) => {
    setQuizState(prev => {
      if (!prev) return prev;
      const newAnswers = [...prev.answers];
      newAnswers[questionId] = { ...newAnswers[questionId], selectedAnswer: answerIndex };
      const newState = { ...prev, answers: newAnswers };
      localStorage.setItem(`quiz_${prev.examName}_${prev.quizType}`, JSON.stringify(newState));
      return newState;
    });
  };

  const markForReview = (questionId: number) => {
    setQuizState(prev => {
      if (!prev) return prev;
      const newAnswers = [...prev.answers];
      newAnswers[questionId] = { 
        ...newAnswers[questionId], 
        markedForReview: !newAnswers[questionId].markedForReview 
      };
      const newState = { ...prev, answers: newAnswers };
      localStorage.setItem(`quiz_${prev.examName}_${prev.quizType}`, JSON.stringify(newState));
      return newState;
    });
  };

  const nextQuestion = () => {
    setQuizState(prev => {
      if (!prev || prev.currentQuestion >= prev.answers.length - 1) return prev;
      return { ...prev, currentQuestion: prev.currentQuestion + 1 };
    });
  };

  const previousQuestion = () => {
    setQuizState(prev => {
      if (!prev || prev.currentQuestion <= 0) return prev;
      return { ...prev, currentQuestion: prev.currentQuestion - 1 };
    });
  };

  const goToQuestion = (index: number) => {
    setQuizState(prev => {
      if (!prev) return prev;
      return { ...prev, currentQuestion: index };
    });
  };

  const submitQuiz = () => {
    setQuizState(prev => {
      if (!prev) return prev;
      const newState = { ...prev, isCompleted: true };
      localStorage.setItem(`quiz_${prev.examName}_${prev.quizType}_completed`, JSON.stringify(newState));
      localStorage.removeItem(`quiz_${prev.examName}_${prev.quizType}`);
      return newState;
    });
  };

  const resetQuiz = () => {
    if (quizState) {
      localStorage.removeItem(`quiz_${quizState.examName}_${quizState.quizType}`);
      localStorage.removeItem(`quiz_${quizState.examName}_${quizState.quizType}_completed`);
    }
    setQuizState(null);
  };

  const saveProgress = () => {
    if (quizState) {
      localStorage.setItem(`quiz_${quizState.examName}_${quizState.quizType}`, JSON.stringify(quizState));
    }
  };

  const loadProgress = (examName: string): boolean => {
    const saved = localStorage.getItem(`quiz_${examName}_full`);
    if (saved) {
      setQuizState(JSON.parse(saved));
      return true;
    }
    return false;
  };

  return (
    <QuizContext.Provider
      value={{
        quizState,
        startQuiz,
        selectAnswer,
        markForReview,
        nextQuestion,
        previousQuestion,
        goToQuestion,
        submitQuiz,
        resetQuiz,
        saveProgress,
        loadProgress,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
