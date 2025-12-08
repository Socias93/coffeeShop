import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formData, schema } from "./schemas/CoffesSchema";
import { useEffect, useState } from "react";
import { getRecipe, Recipe, saveRecipe } from "../services/CoffeeRecipeService";
import { Category, getCategories } from "../services/CategoryService";

function ViewCoffeePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<Recipe>();
  const [categories, setCategories] = useState<Category[]>([]);
  const navigate = useNavigate();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({ resolver: zodResolver(schema) });

  useEffect(() => {
    async function fetch() {
      const { data: categories } = await getCategories();
      setCategories(categories);

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

      const { data: recipe } = await getRecipe(id);
      if (!recipe) return;

      setRecipe(recipe);
      reset(mapToFormData(recipe));
    }
    fetch();
  }, [reset, id]);

  function mapToFormData(recipe: Recipe) {
    return {
      id: recipe.id,
      title: recipe.title,
      category: recipe.category,
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
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-100"
                style={{ maxWidth: 700 }}>
                {id === "new" ? (
                  <h4 className="mb-3 mt-4 text-light text-center">
                    Create a Recipe
                  </h4>
                ) : (
                  <h4 className="mt-4 text-light text-center">Recipe {id}</h4>
                )}

                <div
                  className="d-grid shadow-lg rounded-4 p-4 bg-dark justify-content-center"
                  style={{ maxWidth: 350 }}>
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
                      <p className="text-danger">
                        {errors.description.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-3 mt-3">
                    <select
                      {...register("categoryId")}
                      id="disabledSelect"
                      className="form-select">
                      <option value="">Category</option>
                      {categories.map((category) => (
                        <option value={category.id} key={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                    {errors.categoryId && (
                      <p className="text-danger">{errors.categoryId.message}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-light">Ingredients</label>
                    <input
                      {...register("ingredients")}
                      className="form-control"
                    />
                    {errors.ingredients && (
                      <p className="text-danger">
                        {errors.ingredients.message}
                      </p>
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
                  </div>{" "}
                  <div className="text-center mt-3">
                    {id === "new" ? (
                      <button type="submit" className="btn btn-outline-light">
                        Save
                      </button>
                    ) : (
                      <button type="submit" className="btn btn-outline-light">
                        Update
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewCoffeePage;
