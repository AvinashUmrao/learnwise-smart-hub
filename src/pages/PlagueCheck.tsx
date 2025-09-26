import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Search, Mail, Bell, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PlagueCheck = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Plague Check</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Coming Soon
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our advanced plagiarism detection system is currently under development. 
            This powerful tool will help ensure academic integrity and originality.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto border-0 shadow-strong mb-8">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl">Plague Check</CardTitle>
            <CardDescription>Advanced Plagiarism Detection System</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-warning/10 text-warning rounded-full text-sm font-medium">
                <Clock className="w-4 h-4" />
                Under Development
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-center">What to Expect:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-accent/30 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium mb-1">AI-Powered Detection</h4>
                    <p className="text-sm text-muted-foreground">
                      Advanced algorithms to detect plagiarism across multiple sources and formats
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-accent/30 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium mb-1">Comprehensive Database</h4>
                    <p className="text-sm text-muted-foreground">
                      Check against billions of web pages, academic papers, and publications
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-accent/30 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium mb-1">Detailed Reports</h4>
                    <p className="text-sm text-muted-foreground">
                      Get comprehensive similarity reports with source citations and suggestions
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-accent/30 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium mb-1">Multiple File Formats</h4>
                    <p className="text-sm text-muted-foreground">
                      Support for documents, presentations, code files, and more
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="font-semibold text-center mb-4">Stay Updated</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">
                Want to be notified when Plague Check launches? We'll send you an email as soon as it's ready.
              </p>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Mail className="mr-2 h-4 w-4" />
                  Notify Me
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Bell className="mr-2 h-4 w-4" />
                  Follow Updates
                </Button>
              </div>
            </div>

            <div className="text-center">
              <Link to="/">
                <Button variant="hero" size="lg" className="w-full">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <Card className="border-0 shadow-medium">
          <CardHeader>
            <CardTitle className="text-center">Development Timeline</CardTitle>
            <CardDescription className="text-center">
              Here's what we're working on and when you can expect it
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-success rounded-full"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Research & Planning</h4>
                    <Badge variant="success">Completed</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Algorithm research and system architecture design</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-warning rounded-full"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Core Development</h4>
                    <Badge variant="warning">In Progress</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Building the detection engine and user interface</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-muted rounded-full"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Testing & Optimization</h4>
                    <Badge variant="outline">Upcoming</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Beta testing and performance optimization</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-muted rounded-full"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Public Launch</h4>
                    <Badge variant="outline">Q2 2024</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Full feature launch with comprehensive documentation</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PlagueCheck;