import { ArrowRight, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogData } from "@/data/sampleData";

export const BlogGrid = () => {
  const regularBlogs = blogData.slice(1);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {regularBlogs.map((blog) => (
          <Card key={blog.id} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:scale-105">
            <div className="aspect-video bg-gradient-card"></div>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary">{blog.category}</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-1" />
                  {blog.readTime}
                </div>
              </div>
              <CardTitle className="text-lg line-clamp-2 leading-tight">
                {blog.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground line-clamp-3 mb-4 leading-relaxed">
                {blog.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{blog.author}</span>
                </div>
                <span>{blog.date}</span>
              </div>
              
              <Button variant="ghost" className="w-full justify-start p-0 h-auto font-medium">
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" size="lg">
          Load More Articles
        </Button>
      </div>
    </>
  );
};
