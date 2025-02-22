import { useQuery } from "@tanstack/react-query";
import BlogCard from "@/components/blog/BlogCard";
import type { Post } from "@shared/schema";

export default function Blog() {
  const { data: posts, isLoading } = useQuery<Post[]>({
    queryKey: ["/api/posts"],
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif mb-8">Blog</h1>
      
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-64 bg-muted animate-pulse rounded-lg" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts?.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
