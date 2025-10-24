import { BookOpen, Award, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const FeaturesSection = () => {
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

  return (
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
  );
};
