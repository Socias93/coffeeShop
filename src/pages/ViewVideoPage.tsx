import { zodResolver } from "@hookform/resolvers/zod";
import { schema, videoData } from "./schemas/VideoSchema";
import { useForm } from "react-hook-form";

function ViewVideoPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<videoData>({ resolver: zodResolver(schema) });

  return (
    <>
      <img
        style={{ width: "100%", height: "45vh" }}
        src="/bilder/newnewcoffee.jpg"
        alt="Coffee Background image"></img>
      <div className="d-flex justify-content-center">
        <form>
          <div className="m-4 p-5 shadow rounded-5">
            <div className="mt-2">
              <label className="form-label d-grid justify-content-center mt-1">
                Title
              </label>
              <input className="form-control bg-dark" type="text" />
            </div>
            <div className="mt-3">
              <label className="form-label d-grid justify-content-center mt-1">
                Video Link
              </label>
              <input className="form-control bg-dark" type="text" />
            </div>
            <div className="mt-3">
              <label className="form-label d-grid justify-content-center mt-1">
                Image
              </label>
              <input className="form-control bg-dark" type="text" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ViewVideoPage;
