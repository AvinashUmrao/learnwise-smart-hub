import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Users, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { examOptions } from "@/data/sampleData";

const ExamPrep = () => {
  const [selectedExam, setSelectedExam] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Exam Preparation</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your Path to Success
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive preparation materials and practice tests for all major competitive exams. 
            Start your journey with expert-curated content and AI-powered learning.
          </p>
        </div>

        {/* Exam Options Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {examOptions.map((exam) => (
            <Card 
              key={exam.id} 
              className={`border-2 transition-all duration-300 cursor-pointer hover:shadow-medium transform hover:scale-105 ${
                selectedExam === exam.id 
                  ? 'border-primary shadow-medium bg-primary/5' 
                  : 'border-border hover:border-primary/50'
              }`}
              onClick={() => setSelectedExam(exam.id)}
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-3">{exam.icon}</div>
                <CardTitle className="text-2xl font-bold">{exam.name}</CardTitle>
                <CardDescription className="text-sm font-medium text-muted-foreground">
                  {exam.fullName}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {exam.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Key Subjects:</h4>
                  <div className="flex flex-wrap gap-1">
                    {exam.subjects.map((subject, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  {exam.id === 'gate' ? (
                    <Link to="/gate">
                      <Button className="w-full" variant="default">
                        Start GATE Preparation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  ) : (
                    <Button className="w-full" variant="outline" disabled>
                      Coming Soon
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Section - GATE */}
        <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 text-primary">⭐ Most Popular</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                GATE 2025 Complete Course
              </h2>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Comprehensive GATE preparation with study materials, previous year papers, 
                mock tests, and expert guidance. Everything you need in one place.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">1200+</div>
                    <div className="text-white/80 text-sm">Study Materials</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">25,000+</div>
                    <div className="text-white/80 text-sm">Students</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">500+</div>
                    <div className="text-white/80 text-sm">Practice Tests</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">4.8/5</div>
                    <div className="text-white/80 text-sm">Rating</div>
                  </div>
                </div>
              </div>

              <Link to="/gate">
                <Button variant="default" size="lg" className="bg-white text-primary hover:bg-white/90">
                  Explore GATE Course
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
                <h3 className="font-semibold text-lg mb-4">What's Included:</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Complete Study Material</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Previous Year Papers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Mock Tests & Quizzes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Performance Analytics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Expert Doubt Resolution</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why Choose EduSmart?
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Join thousands of successful students who achieved their dream scores with our proven methodology.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Content</h3>
              <p className="text-muted-foreground">
                Curated by top educators and industry experts with years of teaching experience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
              <p className="text-muted-foreground">
                95% success rate with students getting into their dream institutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-warning/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-warning" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Support</h3>
              <p className="text-muted-foreground">
                Connect with peers, participate in discussions, and learn together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamPrep;