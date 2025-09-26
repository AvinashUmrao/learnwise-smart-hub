import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  FileText, 
  Bell, 
  List, 
  Brain, 
  Download, 
  Clock, 
  Star,
  ChevronRight,
  PlayCircle,
  Users,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";
import { gateData } from "@/data/sampleData";

const Gate = () => {
  const [activeTab, setActiveTab] = useState("study-material");

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">GATE 2025</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            GATE Complete Preparation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Master the Graduate Aptitude Test in Engineering with our comprehensive study materials, 
            practice tests, and expert guidance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/gate/quiz">
              <Button size="lg" variant="hero">
                <Brain className="mr-2 h-5 w-5" />
                Take Practice Quiz
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Introduction
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-gradient-card rounded-xl border border-border">
            <div className="text-3xl font-bold text-primary mb-2">1200+</div>
            <div className="text-muted-foreground font-medium">Study Materials</div>
          </div>
          <div className="text-center p-6 bg-gradient-card rounded-xl border border-border">
            <div className="text-3xl font-bold text-success mb-2">500+</div>
            <div className="text-muted-foreground font-medium">Practice Tests</div>
          </div>
          <div className="text-center p-6 bg-gradient-card rounded-xl border border-border">
            <div className="text-3xl font-bold text-warning mb-2">25K+</div>
            <div className="text-muted-foreground font-medium">Students</div>
          </div>
          <div className="text-center p-6 bg-gradient-card rounded-xl border border-border">
            <div className="text-3xl font-bold text-secondary mb-2">95%</div>
            <div className="text-muted-foreground font-medium">Success Rate</div>
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="study-material" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Study Material</span>
            </TabsTrigger>
            <TabsTrigger value="papers" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Previous Papers</span>
            </TabsTrigger>
            <TabsTrigger value="updates" className="flex items-center gap-2">
              <Bell className="w-4 h-4" />
              <span className="hidden sm:inline">Updates</span>
            </TabsTrigger>
            <TabsTrigger value="syllabus" className="flex items-center gap-2">
              <List className="w-4 h-4" />
              <span className="hidden sm:inline">Syllabus</span>
            </TabsTrigger>
            <TabsTrigger value="quiz" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              <span className="hidden sm:inline">Quiz</span>
            </TabsTrigger>
          </TabsList>

          {/* Study Material Tab */}
          <TabsContent value="study-material" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-foreground">Study Materials</h2>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download All
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gateData.studyMaterial.map((material) => (
                <Card key={material.id} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{material.type}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {material.lessons} lessons
                      </div>
                    </div>
                    <CardTitle className="text-lg">{material.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {material.description}
                    </CardDescription>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      {material.size && <span>Size: {material.size}</span>}
                      {material.duration && <span>Duration: {material.duration}</span>}
                    </div>
                    
                    <Button className="w-full" variant="default">
                      <Download className="mr-2 h-4 w-4" />
                      Access Material
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Previous Papers Tab */}
          <TabsContent value="papers" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-foreground">Previous Year Papers</h2>
              <Button variant="outline">View All Years</Button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {gateData.previousPapers.map((paper) => (
                <Card key={paper.id} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">Year {paper.year}</Badge>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{paper.questions} Questions</span>
                        <span>{paper.marks} Marks</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{paper.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        Duration: {paper.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-warning fill-current" />
                        <span className="text-sm font-medium">4.5</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="flex-1" variant="default">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                      <Button className="flex-1" variant="outline">
                        <PlayCircle className="mr-2 h-4 w-4" />
                        Solve Online
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Updates Tab */}
          <TabsContent value="updates" className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Latest Updates & Announcements</h2>
            
            <div className="space-y-4">
              {gateData.updates.map((update) => (
                <Card key={update.id} className="border-0 shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-3 h-3 rounded-full mt-2 ${
                        update.type === 'Important' ? 'bg-destructive' :
                        update.type === 'Update' ? 'bg-warning' : 'bg-success'
                      }`}></div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant={
                            update.type === 'Important' ? 'destructive' :
                            update.type === 'Update' ? 'warning' : 'success'
                          }>
                            {update.type}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{update.date}</span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{update.title}</h3>
                        <p className="text-muted-foreground">{update.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Syllabus Tab */}
          <TabsContent value="syllabus" className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">GATE CS Syllabus 2025</h2>
            
            <div className="grid gap-6">
              {Object.entries(gateData.syllabus).map(([subject, topics]) => (
                <Card key={subject} className="border-0 shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-primary" />
                      {subject}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {topics.map((topic, index) => (
                        <div key={index} className="flex items-center gap-2 p-3 bg-accent/50 rounded-lg">
                          <ChevronRight className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Quiz Tab */}
          <TabsContent value="quiz" className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Practice Quiz</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Test your knowledge with our carefully curated quiz questions. 
                Get instant feedback and detailed explanations for each answer.
              </p>
              
              <div className="bg-gradient-primary rounded-2xl p-8 text-white mb-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2">5</div>
                    <div className="text-white/80">Questions</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">10</div>
                    <div className="text-white/80">Minutes</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">Mixed</div>
                    <div className="text-white/80">Difficulty</div>
                  </div>
                </div>
              </div>

              <Link to="/gate/quiz">
                <Button size="lg" variant="default" className="bg-primary text-white hover:bg-primary/90">
                  <Brain className="mr-2 h-5 w-5" />
                  Start Practice Quiz
                </Button>
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Gate;