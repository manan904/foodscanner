export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  cookTime: string;
  servings: number;
  image: string;
  slug: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  slug: string;
}

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Creamy Mushroom Risotto',
    description: 'A rich and creamy Italian risotto packed with mushrooms and Parmesan cheese.',
    ingredients: [
      '1 1/2 cups Arborio rice',
      '4 cups vegetable broth',
      '1 lb mushrooms, sliced',
      '1 onion, diced',
      '3 cloves garlic, minced',
      '1/2 cup white wine',
      '1/2 cup Parmesan cheese',
      'Fresh parsley',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Sauté mushrooms until golden brown',
      'Cook onion and garlic until softened',
      'Add rice and toast for 2 minutes',
      'Add wine and let it absorb',
      'Gradually add broth while stirring',
      'Finish with Parmesan and parsley'
    ],
    prepTime: '15 mins',
    cookTime: '30 mins',
    servings: 4,
    image: '/images/mushroom-risotto.jpg',
    slug: 'creamy-mushroom-risotto'
  },
  {
    id: '2',
    title: 'Spicy Thai Basil Tofu',
    description: 'Crispy tofu cubes in a spicy Thai basil sauce with vegetables.',
    ingredients: [
      '1 block firm tofu',
      '2 cups mixed vegetables',
      '4 cloves garlic',
      'Thai basil leaves',
      'Soy sauce',
      'Chili sauce',
      'Vegetable oil'
    ],
    instructions: [
      'Press and cube tofu',
      'Fry tofu until crispy',
      'Stir-fry vegetables and garlic',
      'Add sauces and simmer',
      'Mix in Thai basil leaves'
    ],
    prepTime: '20 mins',
    cookTime: '15 mins',
    servings: 3,
    image: '/images/thai-basil-tofu.jpg',
    slug: 'spicy-thai-basil-tofu'
  },
  {
    id: '3',
    title: 'Mediterranean Quinoa Bowl',
    description: 'Healthy quinoa bowl with roasted vegetables and tahini dressing.',
    ingredients: [
      '1 cup quinoa',
      'Mixed Mediterranean vegetables',
      'Chickpeas',
      'Tahini',
      'Lemon juice',
      'Olive oil',
      'Fresh herbs'
    ],
    instructions: [
      'Cook quinoa according to package',
      'Roast vegetables with olive oil',
      'Prepare tahini dressing',
      'Assemble bowls',
      'Drizzle with dressing'
    ],
    prepTime: '10 mins',
    cookTime: '25 mins',
    servings: 4,
    image: '/images/quinoa-bowl.jpg',
    slug: 'mediterranean-quinoa-bowl'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Benefits of a Plant-Based Diet',
    excerpt: 'Discover how a plant-based diet can improve your health and the environment.',
    content: `A plant-based diet has numerous benefits for both personal health and environmental sustainability...`,
    date: '2024-01-15',
    author: 'Sarah Green',
    image: '/images/plant-based-diet.jpg',
    slug: 'benefits-plant-based-diet'
  },
  {
    id: '2',
    title: 'Essential Herbs for Vegetarian Cooking',
    excerpt: 'Learn about the must-have herbs that will elevate your vegetarian dishes.',
    content: `Herbs are the secret to creating flavorful vegetarian dishes...`,
    date: '2024-01-20',
    author: 'Michael Herbs',
    image: '/images/cooking-herbs.jpg',
    slug: 'essential-herbs-vegetarian-cooking'
  },
  {
    id: '3',
    title: 'Meal Prep Tips for Vegetarians',
    excerpt: 'Master the art of vegetarian meal prep with these practical tips.',
    content: `Effective meal prep can save time and ensure you always have healthy options available...`,
    date: '2024-01-25',
    author: 'Lisa Chen',
    image: '/images/meal-prep.jpg',
    slug: 'meal-prep-tips-vegetarians'
  }
];

export const getRecipes = () => recipes;
export const getBlogPosts = () => blogPosts;