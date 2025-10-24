import { BlogsHeader } from "@/components/blogs/BlogsHeader";
import { BlogsSearchFilter } from "@/components/blogs/BlogsSearchFilter";
import { FeaturedBlog } from "@/components/blogs/FeaturedBlog";
import { BlogGrid } from "@/components/blogs/BlogGrid";
import { NewsletterSignup } from "@/components/blogs/NewsletterSignup";

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BlogsHeader />
        <BlogsSearchFilter />
        <FeaturedBlog />
        <BlogGrid />
        <NewsletterSignup />
      </div>
    </div>
  );
};

export default Blogs;
