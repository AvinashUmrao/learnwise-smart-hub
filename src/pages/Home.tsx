import { ArrowRight, BookOpen, MessageCircle, Users, Award, TrendingUp, Star, Play, Clock, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { newsData, blogData } from "@/data/sampleData";

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Study Material",
      description: "Access curated study materials for all major competitive exams",
      color: "text-primary"
    },
    {
      icon: Award,
      title: "Expert-Designed Quizzes",
      description: "Practice with quizzes designed by subject matter experts",
      color: "text-success"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Track your progress with detailed analytics and insights",
      color: "text-warning"
    },
    {
      icon: Users,
      title: "Peer Learning",
      description: "Connect with fellow students and learn together",
      color: "text-secondary"
    }
  ];

  const stats = [
    { label: "Students Enrolled", value: "50,000+", icon: Users },
    { label: "Success Rate", value: "95%", icon: TrendingUp },
    { label: "Study Materials", value: "1,200+", icon: BookOpen },
    { label: "Practice Tests", value: "500+", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
              🎉 New GATE 2025 Course Available
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Master Your
              <span className="block bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
                Competitive Exams
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive preparation platform for JEE, GATE, CAT, NEET, UPSC and more. 
              Smart learning with AI-powered insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90 shadow-strong">
                Start Learning Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl mb-3">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform provides all the tools and resources you need for exam success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:scale-105">
                  <CardHeader className="text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${feature.color} bg-current/10`}>
                      <Icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <Badge variant="outline" className="mb-4">Latest Updates</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Educational News
              </h2>
              <p className="text-muted-foreground">Stay updated with the latest exam notifications and educational news.</p>
            </div>
            <Button variant="outline">View All News</Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {newsData.map((news) => (
              <Card key={news.id} className="overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="aspect-video bg-gradient-card"></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{news.category}</Badge>
                    <span className="text-sm text-muted-foreground">{news.date}</span>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">{news.summary}</p>
                  <Button variant="ghost" className="mt-4 p-0 h-auto font-medium">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Chatbot Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4 text-primary">AI Powered</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Smart Learning Assistant
                </h2>
                <p className="text-white/90 text-lg mb-8 leading-relaxed">
                  Get instant answers to your questions with our AI-powered chatbot. 
                  Available 24/7 to help with doubts, explanations, and study guidance.
                </p>
                <div className="flex gap-4">
                  <Button variant="default" size="lg" className="bg-white text-primary hover:bg-white/90">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Try Chatbot
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    Learn More
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <span className="font-medium">EduBot</span>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="text-sm">Hi! I'm here to help you with your studies. Ask me anything about exams, concepts, or study strategies!</p>
                  </div>
                  <div className="bg-primary/20 rounded-lg p-4 ml-8">
                    <p className="text-sm">What's the best way to prepare for GATE CS?</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="text-sm">Great question! Here's a comprehensive study plan for GATE CS...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <Badge variant="outline" className="mb-4">Knowledge Hub</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Expert Insights & Tips
              </h2>
              <p className="text-muted-foreground">Learn from expert educators and successful students.</p>
            </div>
            <Link to="/blogs">
              <Button variant="outline">View All Blogs</Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogData.map((blog) => (
              <Card key={blog.id} className="overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="aspect-video bg-gradient-card"></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{blog.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {blog.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{blog.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3 mb-4">{blog.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      By {blog.author}
                    </div>
                    <Button variant="ghost" size="sm">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Success Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who achieved their goals with EduSmart. 
            Start your preparation today and get ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/exam-prep">
              <Button size="lg" variant="hero" className="w-full sm:w-auto">
                Explore Exam Preparation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;