import { useState } from "react";
import { Brain, ArrowLeft, Clock, BookOpen, List } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface QuizStartProps {
  onStart: (quizType: 'topic' | 'subject' | 'full', duration: number) => void;
}

export const QuizStart = ({ onStart }: QuizStartProps) => {
  const [selectedType, setSelectedType] = useState<'topic' | 'subject' | 'full'>('full');
  const [duration, setDuration] = useState(10);

  const quizTypes = [
    {
      id: 'topic' as const,
      title: 'Topic-wise Test',
      description: 'Focus on specific topics like Algorithms or Data Structures',
      questions: 5,
      duration: 10,
      icon: BookOpen,
    },
    {
      id: 'subject' as const,
      title: 'Subject-wise Test',
      description: 'Test your knowledge in a complete subject area',
      questions: 10,
      duration: 20,
      icon: List,
    },
    {
      id: 'full' as const,
      title: 'Full Syllabus Test',
      description: 'Comprehensive test covering all GATE topics',
      questions: 5,
      duration: 10,
      icon: Brain,
    },
  ];

  const handleTypeChange = (type: 'topic' | 'subject' | 'full') => {
    setSelectedType(type);
    const selected = quizTypes.find(qt => qt.id === type);
    if (selected) {
      setDuration(selected.duration);
    }
  };

  const handleStart = () => {
    onStart(selectedType, duration);
  };

  const selectedQuizType = quizTypes.find(qt => qt.id === selectedType);

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">GATE Practice Quiz</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your Test Type
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the type of quiz that matches your preparation goals. Each test is designed to help you master different aspects of GATE preparation.
          </p>
        </div>

        {/* Test Type Selection */}
        <Card className="border-0 shadow-strong mb-8">
          <CardHeader>
            <CardTitle>Select Test Type</CardTitle>
            <CardDescription>Choose how you want to be tested</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedType} onValueChange={(value) => handleTypeChange(value as 'topic' | 'subject' | 'full')}>
              <div className="space-y-4">
                {quizTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <div
                      key={type.id}
                      className={`flex items-start space-x-4 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                        selectedType === type.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => handleTypeChange(type.id)}
                    >
                      <RadioGroupItem value={type.id} id={type.id} className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor={type.id} className="cursor-pointer">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon className="w-5 h-5 text-primary" />
                            <h3 className="font-semibold text-lg">{type.title}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {type.description}
                          </p>
                          <div className="flex gap-4 text-sm">
                            <span className="text-muted-foreground">
                              {type.questions} Questions
                            </span>
                            <span className="text-muted-foreground">
                              {type.duration} Minutes
                            </span>
                          </div>
                        </Label>
                      </div>
                    </div>
                  );
                })}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Quiz Details */}
        <Card className="max-w-2xl mx-auto border-0 shadow-strong mb-8">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              {selectedQuizType && <selectedQuizType.icon className="w-8 h-8 text-white" />}
            </div>
            <CardTitle className="text-2xl">Quiz Details</CardTitle>
            <CardDescription>Everything you need to know before starting</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-accent/50 rounded-xl">
                <div className="text-2xl font-bold text-primary mb-2">
                  {selectedQuizType?.questions}
                </div>
                <div className="text-sm text-muted-foreground">Questions</div>
              </div>
              <div className="p-4 bg-accent/50 rounded-xl">
                <div className="text-2xl font-bold text-warning mb-2">
                  <Clock className="w-6 h-6 mx-auto mb-1" />
                  {duration}
                </div>
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

            <div className="bg-accent/30 p-4 rounded-lg space-y-2">
              <h4 className="font-semibold text-sm">Quiz Features:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>✓ Mark questions for review</li>
                <li>✓ Navigate between questions freely</li>
                <li>✓ View summary before submission</li>
                <li>✓ Get detailed explanations for each answer</li>
                <li>✓ Track your performance with analytics</li>
              </ul>
            </div>

            <div className="text-center space-y-4">
              <Button onClick={handleStart} size="lg" variant="hero" className="w-full">
                <Brain className="mr-2 h-5 w-5" />
                Start {selectedQuizType?.title}
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
