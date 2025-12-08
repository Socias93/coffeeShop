import axios from "axios";
import { Category } from "./CategoryService";
import { formData } from "../pages/schemas/CoffesSchema";

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
  return axios.get<Recipe>(`${BASE_URL}/${id}`);
}

export function saveRecipe(form: formData) {
  if (form.id) {
    return axios.put<Recipe>(`${BASE_URL}/${form.id}`, form);
  } else {
    return axios.post<Recipe[]>(BASE_URL, form);
  }
}

export function deleteRecipe(id: string) {
  return axios.delete<Recipe[]>(`${BASE_URL}/${id}`);
}
