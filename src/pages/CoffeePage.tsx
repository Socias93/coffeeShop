import { useEffect, useState } from "react";
import {
  deleteRecipe,
  getRecipes,
  Recipe,
} from "../services/fakeCoffeeRecipeService";
import { HeaderImage, CoffeeInfo, CoffeessTable } from "../components/index";
import { useOutletContext } from "react-router-dom";

function CoffeePage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const { searchValue } = useOutletContext<{
    searchValue: string;
  }>();

  useEffect(() => {
    async function fetch() {
      const { data: recipes } = await getRecipes();

      setRecipes(recipes);
    }

    fetch();
  }, []);

  function handleDelete(id: string) {
    const newRecipy = recipes.filter((r) => r.id !== id);
    setRecipes(newRecipy);
    deleteRecipe(id);
  }

  function handleLike(id: string) {
    const newRecipy = recipes.map((r) =>
      r.id === id ? { ...r, liked: !r.liked } : r
    );
    setRecipes(newRecipy);
  }

  const filtredRecipes = searchValue
    ? recipes.filter((f) =>
        f.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    : recipes;

  return (
    <>
      <HeaderImage />
      <CoffeeInfo />
      <CoffeessTable
        onDelete={handleDelete}
        recipes={filtredRecipes}
        onLike={handleLike}
      />
    </>
  );
}

export default CoffeePage;
