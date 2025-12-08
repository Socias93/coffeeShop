import axios from "axios";
import { Category } from "./CategoryService";

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

const BASE_URL = "http://localhost:5555/api/recipes";

export function getRecipes() {
  return axios.get<Recipe[]>(BASE_URL);
}

export function getRecipe(id: string) {
  return axios.get(`${BASE_URL}/${id}`);
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
