import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formData, schema } from "./schemas/CoffesSchema";
import { saveRecipe } from "../services/fakeCoffeeRecipeService";

function ViewCoffeePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({ resolver: zodResolver(schema) });

  function onSubmit(data: formData) {
    console.log("Submitted", data);
    saveRecipe(data);
    navigate("/");
  }

  return (
    <>
      <div className="row bg-dark text-center">
        <div className="col">
          <img
            className="vh-100"
            src="/bilder/4coffee.webp"
            alt="Coffee Picture"
          />
        </div>
        <div className="col vh-100 d-grid justify-content-center align-content-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-100"
            style={{ maxWidth: 700 }}>
            {id === "new" ? (
              <h4 className="mb-3">Create a Recipe</h4>
            ) : (
              <h4>Recipe {id}</h4>
            )}

            <div className="shadow rounded-4 p-4 bg-dark">
              <div className="mb-3">
                <label className="form-label text-light">Title</label>
                <input {...register("title")} className="form-control" />
                {errors.title && (
                  <p className="text-danger">{errors.title.message}</p>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label text-light">Description</label>
                <input {...register("description")} className="form-control" />
                {errors.description && (
                  <p className="text-danger">{errors.description.message}</p>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label text-light">Ingredients</label>
                <input {...register("ingredients")} className="form-control" />
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
    </>
  );
}

export default ViewCoffeePage;
