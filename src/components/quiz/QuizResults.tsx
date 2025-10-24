import { RotateCcw, ArrowLeft, Award, TrendingUp, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { quizQuestions } from "@/data/sampleData";

interface Answer {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
}

interface QuizResultsProps {
  answers: Answer[];
  onRestart: () => void;
}

export const QuizResults = ({ answers, onRestart }: QuizResultsProps) => {
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
          <Button onClick={onRestart} variant="hero" size="lg">
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
