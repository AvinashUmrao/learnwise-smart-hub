import { useState, useEffect } from "react";
import { quizQuestions } from "@/data/sampleData";
import { QuizStart } from "@/components/quiz/QuizStart";
import { QuizTaking } from "@/components/quiz/QuizTaking";
import { QuizResults } from "@/components/quiz/QuizResults";

type QuizState = 'started' | 'taking' | 'completed';
type Answer = {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
};

const GateQuiz = () => {
  const [quizState, setQuizState] = useState<QuizState>('started');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    if (quizState === 'taking' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && quizState === 'taking') {
      handleSubmitQuiz();
    }
  }, [timeLeft, quizState]);

  const handleStartQuiz = () => {
    setQuizState('taking');
    setTimeLeft(600);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      const isCorrect = selectedAnswer === quizQuestions[currentQuestion].correctAnswer;
      const newAnswer: Answer = {
        questionId: quizQuestions[currentQuestion].id,
        selectedAnswer,
        isCorrect
      };

      setAnswers([...answers, newAnswer]);
      
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        handleSubmitQuiz();
      }
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      const previousAnswer = answers[currentQuestion - 1];
      setSelectedAnswer(previousAnswer?.selectedAnswer ?? null);
    }
  };

  const handleSubmitQuiz = () => {
    setQuizState('completed');
  };

  const handleRestartQuiz = () => {
    setQuizState('started');
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setTimeLeft(600);
  };

  if (quizState === 'started') {
    return <QuizStart onStart={handleStartQuiz} />;
  }

  if (quizState === 'taking') {
    return (
      <QuizTaking
        currentQuestion={currentQuestion}
        selectedAnswer={selectedAnswer}
        timeLeft={timeLeft}
        onAnswerSelect={handleAnswerSelect}
        onNext={handleNextQuestion}
        onPrevious={handlePreviousQuestion}
      />
    );
  }

  return <QuizResults answers={answers} onRestart={handleRestartQuiz} />;
};

export default GateQuiz;
