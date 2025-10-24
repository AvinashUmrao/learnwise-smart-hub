import { Badge } from "@/components/ui/badge";

export const BlogsHeader = () => {
  return (
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
  );
};
