import { Brain, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface QuizStartProps {
  onStart: () => void;
}

export const QuizStart = ({ onStart }: QuizStartProps) => {
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
              <Button onClick={onStart} size="lg" variant="hero" className="w-full">
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
};
