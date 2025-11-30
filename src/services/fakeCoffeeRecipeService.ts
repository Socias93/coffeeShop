import { Category } from "./fakeCategoryService";

export type Recipe = {
  id: string;
  title: string;
  description: string;
  ingredients?: string;
  steps?: string;
  imageUrl: string;
  category?: Category;
  liked?: boolean;
};

export interface RecipeData {
  id?: string;
  title: string;
  description: string[];
  ingredients: string[];
  category: Category;
  steps?: string;
  image?: string;
}

let recipes: Recipe[] = [
  {
    id: "1",
    title: "Cappuccino",
    description: "Espresso, steamed milk, foam.",
    ingredients: "1/3 cup espresso  1/3 cup steamed milk 1/3 cup milk foam",

    steps: "Brew espresso Steam milk Spoon foam on top",
    imageUrl: "/bilder/cappuccino.jpg",
    category: { id: "specialty", name: "Specialty" },

    liked: true,
  },
  {
    id: "2",
    title: "Espresso",
    description: "Rich and concentrated shot.",
    ingredients: "18g ground coffee Water 92–96°C",
    steps: "Tamp firmly Extract 25–30s",
    imageUrl: "/bilder/espresso.webp",
    category: { id: "espresso", name: "Espresso" },
    liked: false,
  },
  {
    id: "3",
    title: "Cold Brew",
    description: "Smooth, low-acidity cold extraction.",
    ingredients: "80g coarse coffee 1L cold water",
    steps: "Combine Steep 12–18h Filter & serve over ice",
    imageUrl: "/bilder/coldbrew.webp",
    category: { id: "cold", name: "Cold" },

    liked: false,
  },
  {
    id: "4",
    title: "Latte",
    description: "Espresso,steamed milk and foam.",
    ingredients: "1 shot espresso 200ml steamed milk Thin milk foam",
    steps:
      "Brew espresso Steam milk Pour milk over espresso Top with thin foam",
    imageUrl: "/bilder/latte2.jpg",
    category: { id: "milk", name: "Milk Based" },

    liked: false,
  },
];

export function getRecipes(query?: string): Recipe[] {
  if (!query) return recipes;
  const q = query.toLowerCase();
  return recipes.filter(
    (r) =>
      r.title.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q)
  );
}

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((r) => r.id === id);
}

export function saveRecipe(
  recipe: Partial<Recipe> & { title: string; imageUrl: string }
): Recipe {
  let recipeInDb = recipes.find((r) => r.id === recipe.id) as
    | Recipe
    | undefined;

  if (recipeInDb) {
    recipeInDb.title = recipe.title;
    recipeInDb.description = recipe.description ?? recipeInDb.description;
    recipeInDb.ingredients = recipe.ingredients ?? recipeInDb.ingredients;
    recipeInDb.imageUrl = recipe.imageUrl ?? recipeInDb.imageUrl;
    recipeInDb.category = recipe.category ?? recipeInDb.category;
    return recipeInDb;
  }

  const newRecipe: Recipe = {
    id: Date.now().toString(),
    title: recipe.title,
    description: recipe.description ?? "",
    ingredients: recipe.ingredients,
    steps: recipe.steps,
    imageUrl: recipe.imageUrl,
    category: recipe.category,
    liked: !!recipe.liked,
  };

  recipes = [newRecipe, ...recipes];
  return newRecipe;
}

export function deleteRecipe(id: string): Recipe | undefined {
  const recipeInDb = recipes.find((r) => r.id === id);
  recipes = recipes.filter((r) => r.id !== id);
  return recipeInDb;
}
