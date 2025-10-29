import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { blogData } from "@/data/sampleData";

interface BlogsSearchFilterProps {
  onFilterChange: (filteredBlogs: typeof blogData) => void;
}

export const BlogsSearchFilter = ({ onFilterChange }: BlogsSearchFilterProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Study Tips", "GATE", "Wellness", "Technology", "Success Stories"];

  const filterBlogs = (query: string, category: string) => {
    let filtered = [...blogData];

    if (query.trim()) {
      const searchLower = query.toLowerCase().trim();
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchLower) ||
        blog.excerpt.toLowerCase().includes(searchLower) ||
        blog.author.toLowerCase().includes(searchLower)
      );
    }

    if (category !== "All") {
      filtered = filtered.filter(blog => blog.category === category);
    }

    onFilterChange(filtered);
  };

  return (
    <div className="mb-8">
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search articles..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              filterBlogs(e.target.value, activeCategory);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={category === activeCategory ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setActiveCategory(category);
              filterBlogs(searchQuery, category);
            }}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};
