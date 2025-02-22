import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import type { Post } from "@shared/schema";
import { Link } from "wouter";
import { format } from "date-fns";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        <AspectRatio ratio={16/9}>
          <img 
            src={post.image} 
            alt={post.title}
            className="object-cover w-full h-full"
          />
        </AspectRatio>
        <CardHeader className="p-4">
          <div className="text-sm text-muted-foreground mb-2">
            {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
          </div>
          <h3 className="text-xl font-serif">{post.title}</h3>
          <p className="text-muted-foreground text-sm mt-2">{post.excerpt}</p>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <span className="text-sm text-primary">Read more →</span>
        </CardContent>
      </Card>
    </Link>
  );
}
