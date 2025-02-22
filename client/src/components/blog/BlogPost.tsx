import { AspectRatio } from "@/components/ui/aspect-ratio";
import type { Post } from "@shared/schema";
import { format } from "date-fns";

export default function BlogPost({ post }: { post: Post }) {
  return (
    <article className="max-w-3xl mx-auto">
      <AspectRatio ratio={16/9} className="mb-8">
        <img 
          src={post.image} 
          alt={post.title}
          className="object-cover w-full h-full rounded-lg"
        />
      </AspectRatio>

      <div className="text-sm text-muted-foreground mb-4">
        {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
      </div>

      <h1 className="text-4xl font-serif mb-6">{post.title}</h1>
      
      <div className="prose prose-lg max-w-none">
        {post.content}
      </div>
    </article>
  );
}
