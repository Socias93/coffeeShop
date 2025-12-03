import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formData, schema } from "./schemas/CoffesSchema";
import { useEffect, useState } from "react";
import {
  getRecipe,
  Recipe,
  saveRecipe,
} from "../services/fakeCoffeeRecipeService";
import CoffeeForm from "../components/CoffeForm";

function ViewCoffeePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<Recipe>();
  const navigate = useNavigate();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({ resolver: zodResolver(schema) });

  useEffect(() => {
    if (!id) return;

    if (id === "new") {
      setRecipe(undefined);
      reset({
        id: "",
        title: "",
        description: "",
        ingredients: "",
        imageUrl: "",
      });
      return;
    }

    const recipe = getRecipe(id);
    if (!recipe) return;

    setRecipe(recipe);
    reset(mapToFormData(recipe));
  }, [reset, id]);

  function mapToFormData(recipe: Recipe) {
    return {
      id: recipe.id,
      title: recipe.title,
      description: recipe.description,
      ingredients: recipe.ingredients,
      imageUrl: recipe.imageUrl,
    };
  }

  function onSubmit(data: formData) {
    console.log("Submitted", data);
    saveRecipe(data);
    navigate("/");
  }

  return (
    <>
      <div className="app-container bg-dark w-100">
        <div className="container-fluid">
          <div className="row gy-4">
            <div className="col-12 col-md-5 d-grid flex-column align-items-center mb-3 mb-md-0 ">
              {id === "new" ? (
                <img
                  className="img-fluid shadow-lg rounded-4 mb-3 hero-img"
                  src={recipe?.imageUrl ?? "/bilder/4coffee.webp"}
                  alt="Coffee Picture"
                />
              ) : (
                <>
                  <img
                    className="w-100 shadow-lg rounded-4 mb-3"
                    src={recipe?.imageUrl}
                    alt="Coffee Picture"
                    style={{ objectFit: "cover", maxHeight: "400px" }}
                  />

                  <div className="p-3 shadow-lg rounded-4 w-100">
                    <h2>Title - {recipe?.title}</h2>
                    <h4>Category - {recipe?.category?.name}</h4>
                    <h5>Description - {recipe?.description}</h5>
                    <span>Ingredients - {recipe?.ingredients}</span>
                  </div>
                </>
              )}
            </div>

            <div className="col-12 col-md-2 d-none d-md-flex align-items-center justify-content-center">
              <div className="vertical-text text-light text-center">
                COFFEESHOP
              </div>
            </div>
            <div className="col-12 col-md-5 d-grid justify-content-center">
              <CoffeeForm
                onSubmit={onSubmit}
                errors={errors}
                handleSubmit={handleSubmit}
                id={id}
                register={register}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewCoffeePage;
