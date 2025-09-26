import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Clock, ArrowRight, Search, Filter, User, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { blogData } from "@/data/sampleData";

const Blogs = () => {
  const categories = ["All", "Study Tips", "GATE", "Wellness", "Technology", "Success Stories"];
  const featuredBlog = blogData[0];
  const regularBlogs = blogData.slice(1);

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Knowledge Hub</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Expert Insights & Tips
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from expert educators, successful students, and industry professionals. 
            Discover study strategies, exam tips, and career guidance.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search articles..." 
              className="pl-10"
            />
          </div>
          <Button variant="outline" size="default">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Article */}
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

        {/* Regular Articles Grid */}
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

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-16 border-0 bg-gradient-primary text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
          <CardContent className="relative p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Get the latest study tips, exam updates, and expert insights delivered 
              straight to your inbox. Join 10,000+ students already subscribed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button variant="default" className="bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Blogs;