import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express) {
  // Featured recipes
  app.get("/api/recipes/featured", async (_req, res) => {
    const recipes = await storage.getRecipes();
    res.json(recipes.slice(0, 3));
  });

  // All recipes
  app.get("/api/recipes", async (_req, res) => {
    const recipes = await storage.getRecipes();
    res.json(recipes);
  });

  // Single recipe
  app.get("/api/recipes/:id", async (req, res) => {
    const recipe = await storage.getRecipe(parseInt(req.params.id));
    if (!recipe) {
      res.status(404).json({ message: "Recipe not found" });
      return;
    }
    res.json(recipe);
  });

  // Latest blog posts
  app.get("/api/posts/latest", async (_req, res) => {
    const posts = await storage.getPosts();
    res.json(posts.slice(0, 2));
  });

  // All blog posts
  app.get("/api/posts", async (_req, res) => {
    const posts = await storage.getPosts();
    res.json(posts);
  });

  // Single blog post
  app.get("/api/posts/:id", async (req, res) => {
    const post = await storage.getPost(parseInt(req.params.id));
    if (!post) {
      res.status(404).json({ message: "Post not found" });
      return;
    }
    res.json(post);
  });

  return createServer(app);
}
