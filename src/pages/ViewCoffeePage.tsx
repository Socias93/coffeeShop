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
      // När vi skapar nytt recept: nollställ state + formuläret
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
      <div className="app-container bg-dark">
        <div className="row">
          <div className="col-md-5 d-flex flex-column align-items-center mb-3 mb-md-0">
            {id === "new" ? (
              <img
                className="w-100 shadow-lg rounded-4 mb-3"
                src="/bilder/4coffee.webp"
                alt="Coffee Picture"
                style={{ objectFit: "cover" }}
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

          <div className="col-md-2 d-flex align-items-center justify-content-center">
            <div className="vertical-text text-light text-center">
              COFFEESHOP
            </div>
          </div>

          <div className="col-md-5 d-flex justify-content-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-100"
              style={{ maxWidth: 700 }}>
              {id === "new" ? (
                <h4 className="mb-3 mt-4 text-light">Create a Recipe</h4>
              ) : (
                <h4 className="mt-4 text-light">Recipe {id}</h4>
              )}

              <div className="shadow-lg rounded-4 p-4 bg-dark">
                <div className="mb-3">
                  <label className="form-label text-light">Title</label>
                  <input {...register("title")} className="form-control" />
                  {errors.title && (
                    <p className="text-danger">{errors.title.message}</p>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label text-light">Description</label>
                  <input
                    {...register("description")}
                    className="form-control"
                  />
                  {errors.description && (
                    <p className="text-danger">{errors.description.message}</p>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label text-light">Ingredients</label>
                  <input
                    {...register("ingredients")}
                    className="form-control"
                  />
                  {errors.ingredients && (
                    <p className="text-danger">{errors.ingredients.message}</p>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label text-light">Image</label>
                  <input
                    {...register("imageUrl")}
                    type="text"
                    className="form-control"
                  />
                  {errors.imageUrl && (
                    <p className="text-danger">{errors.imageUrl.message}</p>
                  )}
                </div>

                <div className="text-center mt-3">
                  <button type="submit" className="btn btn-outline-light">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewCoffeePage;
