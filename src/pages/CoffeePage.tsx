import { useState } from "react";
import { getRecipes } from "../services/fakeCoffeeRecipeService";
import CoffeeInfo from "../components/CoffeeInfo";
import CoffeesTable from "../components/CoffessTable";
import HeaderImage from "../components/HeaderImage";
import { useOutletContext } from "react-router-dom";

function CoffeePage() {
  const [recipes, setRecipes] = useState(getRecipes());
  const { searchValue } = useOutletContext<{ searchValue: string }>();

  function handleDelete(id: string) {
    const newRecipy = recipes.filter((r) => r.id !== id);
    setRecipes(newRecipy);
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
      <CoffeesTable
        onDelete={handleDelete}
        recipes={filtredRecipes}
        onLike={handleLike}
      />
    </>
  );
}

export default CoffeePage;
