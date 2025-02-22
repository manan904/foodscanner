import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import RecipeCard from "@/components/recipe/RecipeCard";
import BlogCard from "@/components/blog/BlogCard";
import type { Recipe, Post } from "@shared/schema";

export default function Home() {
  const { data: recipes } = useQuery<Recipe[]>({
    queryKey: ["/api/recipes/featured"],
  });

  const { data: posts } = useQuery<Post[]>({
    queryKey: ["/api/posts/latest"],
  });

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0)' }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-white max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-serif mb-6">Gourmet Journal</h1>
          <p className="text-xl mb-8">
            Discover exceptional recipes and culinary insights inspired by Michelin-star excellence
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/recipes">Explore Recipes</Link>
          </Button>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-serif">Featured Recipes</h2>
          <Button asChild variant="ghost">
            <Link href="/recipes">View All</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recipes?.slice(0, 3).map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-serif">Latest Articles</h2>
          <Button asChild variant="ghost">
            <Link href="/blog">View All</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts?.slice(0, 2).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
