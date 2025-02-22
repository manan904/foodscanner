import { useQuery } from "@tanstack/react-query";
import RecipeCard from "@/components/recipe/RecipeCard";
import type { Recipe } from "@shared/schema";

export default function Recipes() {
  const { data: recipes, isLoading } = useQuery<Recipe[]>({
    queryKey: ["/api/recipes"],
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif mb-8">All Recipes</h1>
      
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-64 bg-muted animate-pulse rounded-lg" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recipes?.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}
