import { useState } from "react";
import { deleteRecipe, getRecipes } from "../services/fakeCoffeeRecipeService";
import { HeaderImage, CoffeeInfo, CoffeessTable } from "../components/index";
import { useOutletContext } from "react-router-dom";

function CoffeePage() {
  const [recipes, setRecipes] = useState(getRecipes());
  const { searchValue } = useOutletContext<{ searchValue: string }>();

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
