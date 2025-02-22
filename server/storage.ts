import { recipes, posts, type Recipe, type InsertRecipe, type Post, type InsertPost } from "@shared/schema";

export interface IStorage {
  getRecipes(): Promise<Recipe[]>;
  getRecipe(id: number): Promise<Recipe | undefined>;
  getPosts(): Promise<Post[]>;
  getPost(id: number): Promise<Post | undefined>;
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}

export class MemStorage implements IStorage {
  private recipes: Map<number, Recipe>;
  private posts: Map<number, Post>;
  private users: Map<number, User>;
  private recipeId: number;
  private postId: number;
  currentId: number;

  constructor() {
    this.recipes = new Map();
    this.posts = new Map();
    this.users = new Map();
    this.recipeId = 1;
    this.postId = 1;
    this.currentId = 1;

    // Add some initial data
    this.addInitialData();
  }

  private addInitialData() {
    const sampleRecipe: Recipe = {
      id: this.recipeId++,
      title: "Classic French Onion Soup",
      description: "A rich, deeply flavored French onion soup topped with crusty bread and melted Gruyère cheese.",
      image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a",
      prepTime: 20,
      cookTime: 60,
      servings: 4,
      difficulty: "Medium",
      ingredients: [
        "4 large onions, thinly sliced",
        "2 tablespoons butter",
        "1 tablespoon olive oil",
        "4 cups beef broth",
        "1 cup red wine",
        "1 baguette, sliced",
        "200g Gruyère cheese, grated"
      ],
      instructions: [
        "Slowly caramelize onions in butter and oil for 30-40 minutes",
        "Add wine and reduce for 5 minutes",
        "Pour in beef broth and simmer for 30 minutes",
        "Top with toasted baguette and cheese, broil until golden"
      ],
      nutritionInfo: {
        calories: "320 kcal",
        protein: "12g",
        carbohydrates: "28g",
        fat: "18g"
      },
      tips: [
        "Use sweet onions for best results",
        "Don't rush the caramelization process"
      ],
      publishedAt: new Date().toISOString()
    };

    const samplePost: Post = {
      id: this.postId++,
      title: "The Art of French Cooking",
      content: "French cuisine is renowned for its...",
      excerpt: "Discover the secrets behind classical French cooking techniques...",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      publishedAt: new Date().toISOString()
    };

    this.recipes.set(sampleRecipe.id, sampleRecipe);
    this.posts.set(samplePost.id, samplePost);
  }

  async getRecipes(): Promise<Recipe[]> {
    return Array.from(this.recipes.values());
  }

  async getRecipe(id: number): Promise<Recipe | undefined> {
    return this.recipes.get(id);
  }

  async getPosts(): Promise<Post[]> {
    return Array.from(this.posts.values());
  }

  async getPost(id: number): Promise<Post | undefined> {
    return this.posts.get(id);
  }
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
}

export const storage = new MemStorage();
import { users, type User, type InsertUser } from "@shared/schema";