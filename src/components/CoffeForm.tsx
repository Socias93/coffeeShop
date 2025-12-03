import { formData } from "../pages/schemas/CoffesSchema";
import CoffeeLabels from "./CoffeeLabels";

interface Props {
  onSubmit(data: formData): void;
  id: any;
  handleSubmit: any;
  register: any;
  errors: any;
}

function CoffeeForm({ onSubmit, errors, register, handleSubmit, id }: Props) {
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-100"
        style={{ maxWidth: 700 }}>
        {id === "new" ? (
          <h4 className="mb-3 mt-4 text-light text-center">Create a Recipe</h4>
        ) : (
          <h4 className="mt-4 text-light text-center">Recipe {id}</h4>
        )}

        <div
          className="d-grid shadow-lg rounded-4 p-4 bg-dark justify-content-center"
          style={{ maxWidth: 350 }}>
          <CoffeeLabels errors={errors} register={register} />
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
    </>
  );
}

export default CoffeeForm;
