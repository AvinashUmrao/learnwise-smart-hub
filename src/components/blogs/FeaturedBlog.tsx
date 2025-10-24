import { ArrowRight, User, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogData } from "@/data/sampleData";

export const FeaturedBlog = () => {
  const featuredBlog = blogData[0];

  return (
    <Card className="border-0 shadow-strong mb-16 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-0">
        <div className="aspect-video md:aspect-auto bg-gradient-card"></div>
        <div className="p-8">
          <Badge variant="secondary" className="mb-4">{featuredBlog.category}</Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4 leading-tight">
            {featuredBlog.title}
          </h2>
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            {featuredBlog.excerpt}
          </p>
          
          <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{featuredBlog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{featuredBlog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{featuredBlog.readTime}</span>
            </div>
          </div>

          <Button variant="hero" size="lg">
            Read Article
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </Card>
  );
};
