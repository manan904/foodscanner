import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Clock, Users } from "lucide-react";
import type { Recipe } from "@shared/schema";
import { Link } from "wouter";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/recipes/${recipe.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        <AspectRatio ratio={16/9}>
          <img 
            src={recipe.image} 
            alt={recipe.title}
            className="object-cover w-full h-full"
          />
        </AspectRatio>
        <CardHeader className="p-4">
          <h3 className="text-xl font-serif">{recipe.title}</h3>
          <p className="text-muted-foreground text-sm mt-2">{recipe.description}</p>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{recipe.prepTime + recipe.cookTime} mins</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>Serves {recipe.servings}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
