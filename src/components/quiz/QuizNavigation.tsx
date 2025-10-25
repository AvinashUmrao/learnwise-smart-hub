import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuiz } from "@/contexts/QuizContext";

export const QuizNavigation = () => {
  const { quizState, goToQuestion } = useQuiz();

  if (!quizState) return null;

  return (
    <Card className="border-0 shadow-soft">
      <CardContent className="p-4">
        <h3 className="font-semibold mb-3 text-sm">Question Navigation</h3>
        <div className="grid grid-cols-5 gap-2">
          {quizState.answers.map((answer, index) => {
            const isAnswered = answer.selectedAnswer !== null;
            const isMarked = answer.markedForReview;
            const isCurrent = quizState.currentQuestion === index;

            return (
              <Button
                key={index}
                variant={isCurrent ? "default" : "outline"}
                size="sm"
                onClick={() => goToQuestion(index)}
                className={`relative ${
                  isAnswered && !isCurrent ? "bg-success/20 border-success" :
                  isMarked && !isCurrent ? "bg-warning/20 border-warning" : ""
                }`}
              >
                {index + 1}
                {isMarked && (
                  <Badge className="absolute -top-1 -right-1 w-2 h-2 p-0 bg-warning" />
                )}
              </Button>
            );
          })}
        </div>
        <div className="mt-4 space-y-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-success/20 border border-success rounded"></div>
            <span className="text-muted-foreground">Answered</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-warning/20 border border-warning rounded"></div>
            <span className="text-muted-foreground">Marked for Review</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 border border-border rounded"></div>
            <span className="text-muted-foreground">Not Answered</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
