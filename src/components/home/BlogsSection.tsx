import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogData } from "@/data/sampleData";

export const BlogsSection = () => {
  return (
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
              <div className="aspect-video overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
              </div>
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
  );
};
