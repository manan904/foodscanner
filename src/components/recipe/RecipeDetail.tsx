import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock, Users, ChefHat } from "lucide-react";
import type { Recipe } from "@shared/schema";

export default function RecipeDetail({ recipe }: { recipe: Recipe }) {
  return (
    <article className="max-w-4xl mx-auto">
      <AspectRatio ratio={16/9} className="mb-8">
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="object-cover w-full h-full rounded-lg"
        />
      </AspectRatio>

      <h1 className="text-4xl font-serif mb-4">{recipe.title}</h1>
      <p className="text-lg text-muted-foreground mb-8">{recipe.description}</p>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5" />
          <div>
            <p className="text-sm font-medium">Total Time</p>
            <p className="text-muted-foreground">{recipe.prepTime + recipe.cookTime} mins</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5" />
          <div>
            <p className="text-sm font-medium">Servings</p>
            <p className="text-muted-foreground">{recipe.servings}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ChefHat className="w-5 h-5" />
          <div>
            <p className="text-sm font-medium">Difficulty</p>
            <p className="text-muted-foreground">{recipe.difficulty}</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-[300px,1fr] gap-8">
        <div>
          <h2 className="text-xl font-medium mb-4">Ingredients</h2>
          <ScrollArea className="h-[400px]">
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, i) => (
                <li key={i} className="text-muted-foreground">{ingredient}</li>
              ))}
            </ul>
          </ScrollArea>
        </div>

        <div>
          <h2 className="text-xl font-medium mb-4">Instructions</h2>
          <ol className="space-y-4">
            {recipe.instructions.map((instruction, i) => (
              <li key={i} className="text-muted-foreground">
                <span className="font-medium text-foreground">Step {i + 1}:</span> {instruction}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <Separator className="my-8" />

      <div>
        <h2 className="text-xl font-medium mb-4">Nutritional Information</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(recipe.nutritionInfo).map(([key, value]) => (
            <div key={key} className="p-4 bg-muted rounded-lg">
              <p className="text-sm font-medium">{key}</p>
              <p className="text-2xl">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {recipe.tips && recipe.tips.length > 0 && (
        <>
          <Separator className="my-8" />
          <div>
            <h2 className="text-xl font-medium mb-4">Chef's Tips</h2>
            <ul className="space-y-2">
              {recipe.tips.map((tip, i) => (
                <li key={i} className="text-muted-foreground">{tip}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </article>
  );
}
