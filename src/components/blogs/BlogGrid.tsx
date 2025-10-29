import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, User } from "lucide-react";
import { blogData } from "@/data/sampleData";

interface BlogGridProps {
  blogs?: typeof blogData;
  onReadMore: (id: number) => void;
  selectedBlogId: number | null;
}

export const BlogGrid = ({
  blogs = blogData,
  onReadMore,
  selectedBlogId,
}: BlogGridProps) => {
  const [visibleBlogs, setVisibleBlogs] = useState(6);

  // If a blog is selected, show its full content
  if (selectedBlogId) {
    const selectedBlog = blogs.find((blog) => blog.id === selectedBlogId);
    if (selectedBlog) {
      return (
        <div className="max-w-3xl mx-auto">
          <Button
            variant="link"
            onClick={() => onReadMore(null)}
            className="mb-4"
          >
            ← Back to Blogs
          </Button>
          <h1 className="text-3xl font-bold mb-4">{selectedBlog.title}</h1>
          <div className="flex items-center gap-4 mb-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{selectedBlog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{selectedBlog.readTime}</span>
            </div>
          </div>
          <img
            src={selectedBlog.image}
            alt={selectedBlog.title}
            className="w-full rounded-lg mb-6"
          />
          <div className="prose max-w-none">
            {selectedBlog.content}
            {/* Add more content here */}
          </div>
        </div>
      );
    }
  }

  // Show blog grid
  const regularBlogs = blogs.slice(0, visibleBlogs);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {regularBlogs.map((blog) => (
          <Card
            key={blog.id}
            className="overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary">{blog.category}</Badge>
                <span className="text-sm text-muted-foreground">
                  {blog.readTime}
                </span>
              </div>
              <CardTitle className="text-lg line-clamp-2">
                {blog.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground line-clamp-3 mb-4">
                {blog.excerpt}
              </p>
              <Button
                variant="ghost"
                className="p-0"
                onClick={() => onReadMore(blog.id)}
              >
                Read More{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {visibleBlogs < blogs.length && (
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() =>
              setVisibleBlogs((prev) => Math.min(prev + 6, blogs.length))
            }
          >
            Load More Articles
          </Button>
        </div>
      )}
    </>
  );
};
