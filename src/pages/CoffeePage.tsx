import { useState } from "react";
import { getRecipes } from "../services/fakeCoffeeRecipeService";
import CoffeeInfo from "../components/CoffeeInfo";
import CoffeesTable from "../components/CoffessTable";
import HeaderImage from "../components/HeaderImage";

import Navbar from "../components/Navbar";

function CoffeePage() {
  const [recipes, setRecipes] = useState(getRecipes());
  const [value, setValue] = useState("");

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

  function SearchQuery(value: string) {
    setValue(value);
  }

  const filtredRecipes = value
    ? recipes.filter((f) => f.title.toLowerCase().includes(value.toLowerCase()))
    : recipes;

  return (
    <div
      style={{
        backgroundColor: "#121212",
        color: "#e5e7eb",
        minHeight: "100vh",
      }}>
      <Navbar onChange={SearchQuery} value={value} />
      <HeaderImage />
      <CoffeeInfo />
      <CoffeesTable
        onDelete={handleDelete}
        recipes={filtredRecipes}
        onLike={handleLike}
      />
    </div>
  );
}

export default CoffeePage;
