import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const BlogsSearchFilter = () => {
  const categories = ["All", "Study Tips", "GATE", "Wellness", "Technology", "Success Stories"];

  return (
    <>
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
    </>
  );
};
