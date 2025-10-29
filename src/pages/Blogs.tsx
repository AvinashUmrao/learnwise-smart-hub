import { useState } from "react";
import { BlogsHeader } from "@/components/blogs/BlogsHeader";
import { BlogsSearchFilter } from "@/components/blogs/BlogsSearchFilter";
import { BlogGrid } from "@/components/blogs/BlogGrid";
import { blogData } from "@/data/sampleData";

export default function Blogs() {
  const [filteredBlogs, setFilteredBlogs] = useState(blogData);
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

  return (
    <div className="container mx-auto py-12 px-4">
      <BlogsHeader />
      <BlogsSearchFilter onFilterChange={setFilteredBlogs} />
      <BlogGrid 
        blogs={filteredBlogs} 
        onReadMore={setSelectedBlogId}
        selectedBlogId={selectedBlogId}
      />
    </div>
  );
}
