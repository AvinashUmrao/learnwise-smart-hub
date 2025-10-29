import { useState } from "react";
import { Clock, ArrowLeft, ArrowRight, BookOpen, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { quizQuestions } from "@/data/sampleData";
import { useQuiz } from "@/contexts/QuizContext";

interface QuizTakingProps {
  currentQuestion: number;
  selectedAnswer: number | null;
  timeLeft: number;
  onAnswerSelect: (answerIndex: number) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export const QuizTaking = ({
  currentQuestion,
  selectedAnswer,
  timeLeft,
  onAnswerSelect,
  onNext,
  onPrevious
}: QuizTakingProps) => {
  const [showExplanation, setShowExplanation] = useState(false);
  const { quizState, markForReview } = useQuiz();
  const questions = quizState?.questions?.length ? quizState.questions : quizQuestions;
  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isMarked = quizState?.answers[currentQuestion]?.markedForReview || false;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      {/* Quiz Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <Badge variant="outline">
            Question {currentQuestion + 1} of {questions.length}
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
              onValueChange={(value) => onAnswerSelect(parseInt(value))}
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
      <div className="flex justify-between items-center">
        <Button 
          variant="outline" 
          onClick={onPrevious}
          disabled={currentQuestion === 0}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>

        <Button
          variant={isMarked ? "warning" : "outline"}
          onClick={() => markForReview(currentQuestion)}
        >
          <Flag className="mr-2 h-4 w-4" />
          {isMarked ? "Unmark" : "Mark for Review"}
        </Button>
        
        <Button 
          onClick={onNext}
          disabled={selectedAnswer === null}
          variant={currentQuestion === questions.length - 1 ? "hero" : "default"}
        >
          {currentQuestion === questions.length - 1 ? 'Submit Quiz' : 'Next Question'}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
