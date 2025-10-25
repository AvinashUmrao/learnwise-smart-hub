import { useEffect } from "react";
import { QuizStart } from "@/components/quiz/QuizStart";
import { QuizTaking } from "@/components/quiz/QuizTaking";
import { QuizResults } from "@/components/quiz/QuizResults";
import { QuizNavigation } from "@/components/quiz/QuizNavigation";
import { quizQuestions } from "@/data/sampleData";
import { useQuiz } from "@/contexts/QuizContext";

type QuizStage = 'start' | 'taking' | 'results';

const GateQuiz = () => {
  const { quizState, startQuiz, selectAnswer, nextQuestion, previousQuestion, submitQuiz, resetQuiz } = useQuiz();

  const stage: QuizStage = !quizState ? 'start' : quizState.isCompleted ? 'results' : 'taking';

  useEffect(() => {
    if (quizState?.isCompleted) {
      // Quiz completed
    }
  }, [quizState?.isCompleted]);

  const handleStart = () => {
    startQuiz('gate', 'full', quizQuestions.length, 10);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (quizState) {
      selectAnswer(quizState.currentQuestion, answerIndex);
    }
  };

  const handleNext = () => {
    if (quizState && quizState.currentQuestion < quizQuestions.length - 1) {
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
    return <QuizStart onStart={handleStart} />;
  }

  if (stage === 'results' && quizState) {
    const answers = quizState.answers.map((ans, idx) => ({
      questionId: idx,
      selectedAnswer: ans.selectedAnswer ?? -1,
      isCorrect: ans.selectedAnswer === quizQuestions[idx].correctAnswer
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

export default GateQuiz;
