import axios from "axios";

export interface Category {
  id: string;
  name: string;
}

const BASE_URL = "http://localhost:5555/api/categories";

export function getCategories() {
  return axios.get<Category[]>(BASE_URL);
}
