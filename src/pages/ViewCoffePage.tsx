import { useParams } from "react-router-dom";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  title: z.string().min(1, { message: "Title is mandatory" }),
  decription: z.string().min(1, { message: "Decription is required" }),
  ingredients: z.string().min(1, { message: "Decription is required" }),
  image: z.string().min(1, { message: "Image is required" }),
});

type formData = z.infer<typeof schema>;

function ViewCoffeePage() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({ resolver: zodResolver(schema) });

  function onSubmit(data: formData) {
    console.log("Submitted", data);
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="col vh-100 d-grid justify-content-center align-content-center">
          {id === "new" ? (
            <h4 className="mb-3"> Create a Recipe </h4>
          ) : (
            <h4> Recipe {id} </h4>
          )}

          <div className="p-5 shadow rounded-4">
            <div className="d-grid justify-content-center">
              <label className="form-label text-light">Title</label>
              <input className="form-control" />
            </div>
            <div className="d-grid justify-content-center">
              <label className="form-label text-light">Decription</label>
              <input className="form-control" />
            </div>
            <div className="d-grid justify-content-center">
              <label className="form-label text-light">Ingredients</label>
              <input className="form-control" />
            </div>
            <div className="d-grid justify-content-center">
              <label className="form-label text-light">Image</label>
              <input className="form-control" />
            </div>
            <div className="text-center mt-4">
              <button className="btn btn-outline-light">Save</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ViewCoffeePage;
