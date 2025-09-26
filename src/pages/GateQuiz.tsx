import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { 
  Brain, 
  Clock, 
  CheckCircle, 
  XCircle, 
  TrendingUp, 
  Award,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Target,
  BookOpen
} from "lucide-react";
import { Link } from "react-router-dom";
import { quizQuestions } from "@/data/sampleData";

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
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [showExplanation, setShowExplanation] = useState(false);

  // Timer effect
  useEffect(() => {
    if (quizState === 'taking' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && quizState === 'taking') {
      handleSubmitQuiz();
    }
  }, [timeLeft, quizState]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

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
        setShowExplanation(false);
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
      setShowExplanation(false);
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
    setShowExplanation(false);
  };

  const getResults = () => {
    const correct = answers.filter(a => a.isCorrect).length;
    const total = answers.length;
    const percentage = Math.round((correct / total) * 100);
    
    const subjectWise = answers.reduce((acc, answer, index) => {
      const question = quizQuestions[index];
      if (!acc[question.subject]) {
        acc[question.subject] = { correct: 0, total: 0 };
      }
      acc[question.subject].total++;
      if (answer.isCorrect) {
        acc[question.subject].correct++;
      }
      return acc;
    }, {} as Record<string, { correct: number; total: number }>);

    return { correct, total, percentage, subjectWise };
  };

  if (quizState === 'started') {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">GATE Practice Quiz</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Test Your Knowledge
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Challenge yourself with 5 carefully selected questions covering key GATE topics. 
              Get instant feedback and detailed explanations.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto border-0 shadow-strong">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Quiz Details</CardTitle>
              <CardDescription>Everything you need to know before starting</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4 bg-accent/50 rounded-xl">
                  <div className="text-2xl font-bold text-primary mb-2">5</div>
                  <div className="text-sm text-muted-foreground">Questions</div>
                </div>
                <div className="p-4 bg-accent/50 rounded-xl">
                  <div className="text-2xl font-bold text-warning mb-2">10</div>
                  <div className="text-sm text-muted-foreground">Minutes</div>
                </div>
                <div className="p-4 bg-accent/50 rounded-xl">
                  <div className="text-2xl font-bold text-success mb-2">Mixed</div>
                  <div className="text-sm text-muted-foreground">Difficulty</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-center">Topics Covered:</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Data Structures</Badge>
                  <Badge variant="secondary">Algorithms</Badge>
                  <Badge variant="secondary">Time Complexity</Badge>
                  <Badge variant="secondary">Problem Solving</Badge>
                </div>
              </div>

              <div className="text-center space-y-4">
                <Button onClick={handleStartQuiz} size="lg" variant="hero" className="w-full">
                  <Brain className="mr-2 h-5 w-5" />
                  Start Quiz
                </Button>
                <Link to="/gate">
                  <Button variant="outline" className="w-full">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to GATE Course
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (quizState === 'taking') {
    const question = quizQuestions[currentQuestion];
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Quiz Header */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <Badge variant="outline">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </Badge>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
              </div>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="border-0 shadow-medium mb-8">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <Badge variant="secondary">{question.subject}</Badge>
                <Badge variant={
                  question.difficulty === 'Easy' ? 'success' :
                  question.difficulty === 'Medium' ? 'warning' : 'destructive'
                }>
                  {question.difficulty}
                </Badge>
              </div>
              <CardTitle className="text-xl leading-relaxed">
                {question.question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup 
                value={selectedAnswer?.toString()} 
                onValueChange={(value) => handleAnswerSelect(parseInt(value))}
                className="space-y-4"
              >
                {question.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer font-medium">
                      {String.fromCharCode(65 + index)}. {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              {selectedAnswer !== null && (
                <div className="mt-6 p-4 bg-accent/30 rounded-lg">
                  <Button 
                    variant="ghost" 
                    onClick={() => setShowExplanation(!showExplanation)}
                    className="w-full justify-start"
                  >
                    <BookOpen className="mr-2 h-4 w-4" />
                    {showExplanation ? 'Hide Explanation' : 'Show Explanation'}
                  </Button>
                  
                  {showExplanation && (
                    <div className="mt-4 p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Explanation:</strong> {question.explanation}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            
            <Button 
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
              variant={currentQuestion === quizQuestions.length - 1 ? "hero" : "default"}
            >
              {currentQuestion === quizQuestions.length - 1 ? 'Submit Quiz' : 'Next Question'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Results page
  const results = getResults();
  
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Quiz Completed</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Your Results
          </h1>
          <p className="text-xl text-muted-foreground">
            Here's how you performed on the GATE practice quiz
          </p>
        </div>

        {/* Score Card */}
        <Card className="border-0 shadow-strong mb-8">
          <CardHeader className="text-center">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ${
              results.percentage >= 80 ? 'bg-success/10 text-success' :
              results.percentage >= 60 ? 'bg-warning/10 text-warning' : 'bg-destructive/10 text-destructive'
            }`}>
              {results.percentage >= 80 ? <Award className="w-10 h-10" /> :
               results.percentage >= 60 ? <TrendingUp className="w-10 h-10" /> : <Target className="w-10 h-10" />}
            </div>
            <CardTitle className="text-3xl font-bold">{results.percentage}%</CardTitle>
            <CardDescription>
              {results.correct} out of {results.total} questions correct
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-accent/50 rounded-xl">
                <div className="text-2xl font-bold text-success mb-2">{results.correct}</div>
                <div className="text-sm text-muted-foreground">Correct Answers</div>
              </div>
              <div className="p-4 bg-accent/50 rounded-xl">
                <div className="text-2xl font-bold text-destructive mb-2">{results.total - results.correct}</div>
                <div className="text-sm text-muted-foreground">Wrong Answers</div>
              </div>
              <div className="p-4 bg-accent/50 rounded-xl">
                <div className="text-2xl font-bold text-primary mb-2">{results.percentage}%</div>
                <div className="text-sm text-muted-foreground">Score</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Subject-wise Analysis */}
        <Card className="border-0 shadow-medium mb-8">
          <CardHeader>
            <CardTitle>Subject-wise Performance</CardTitle>
            <CardDescription>See how you performed in different topics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(results.subjectWise).map(([subject, data]) => {
                const subjectPercentage = Math.round((data.correct / data.total) * 100);
                return (
                  <div key={subject} className="flex items-center justify-between p-4 bg-accent/30 rounded-lg">
                    <div>
                      <div className="font-medium">{subject}</div>
                      <div className="text-sm text-muted-foreground">
                        {data.correct}/{data.total} correct
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Progress value={subjectPercentage} className="w-24" />
                      <span className="font-bold text-sm w-12">{subjectPercentage}%</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Suggestions */}
        <Card className="border-0 shadow-medium mb-8">
          <CardHeader>
            <CardTitle>Improvement Suggestions</CardTitle>
            <CardDescription>Based on your performance, here are our recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {results.percentage < 60 && (
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <h4 className="font-medium text-destructive mb-2">Focus on Fundamentals</h4>
                  <p className="text-sm text-muted-foreground">
                    Consider reviewing basic concepts and practicing more foundational problems before attempting advanced topics.
                  </p>
                </div>
              )}
              
              {Object.entries(results.subjectWise).map(([subject, data]) => {
                const subjectPercentage = (data.correct / data.total) * 100;
                if (subjectPercentage < 50) {
                  return (
                    <div key={subject} className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
                      <h4 className="font-medium text-warning mb-2">Improve {subject}</h4>
                      <p className="text-sm text-muted-foreground">
                        You scored {Math.round(subjectPercentage)}% in {subject}. Focus on this topic with additional study materials and practice.
                      </p>
                    </div>
                  );
                }
                return null;
              })}

              {results.percentage >= 80 && (
                <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                  <h4 className="font-medium text-success mb-2">Excellent Performance!</h4>
                  <p className="text-sm text-muted-foreground">
                    Great job! You're well-prepared. Continue practicing with more advanced topics and previous year papers.
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={handleRestartQuiz} variant="hero" size="lg">
            <RotateCcw className="mr-2 h-5 w-5" />
            Take Quiz Again
          </Button>
          <Link to="/gate">
            <Button variant="outline" size="lg">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to GATE Course
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GateQuiz;