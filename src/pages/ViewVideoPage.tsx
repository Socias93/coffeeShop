import { zodResolver } from "@hookform/resolvers/zod";
import { schema, videoData } from "./schemas/VideoSchema";
import { useForm } from "react-hook-form";
import VideoHeaderImage from "./VideoHeaderImage";

function ViewVideoPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<videoData>({ resolver: zodResolver(schema) });

  function onSubmit(data: videoData) {
    console.log("Submitted", data);
  }

  return (
    <>
      <VideoHeaderImage />
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="m-4 p-5 shadow rounded-5">
            <div className="mt-2">
              <label className="form-label d-grid justify-content-center mt-1">
                Title
              </label>
              <input
                {...register("title")}
                className={`form-control bg-${
                  errors.title ? "danger-subtle" : "dark"
                }`}
                type="text"
              />
              {errors.title && (
                <p className="text-danger">{errors.title.message} </p>
              )}
            </div>
            <div className="mt-3">
              <label className="form-label d-grid justify-content-center mt-1">
                Video Link
              </label>
              <input
                {...register("videoUrl")}
                className={`form-control bg-${
                  errors.title ? "danger-subtle" : "dark"
                }`}
                type="text"
              />
              {errors.videoUrl && (
                <p className="text-danger">{errors.videoUrl.message} </p>
              )}
            </div>
            <div className="mt-3">
              <label className="form-label d-grid justify-content-center mt-1">
                Image
              </label>
              <input
                {...register("imgaeUrl")}
                className={`form-control bg-${
                  errors.title ? "danger-subtle" : "dark"
                }`}
                type="text"
              />
              {errors.imgaeUrl && (
                <p className="text-danger">{errors.imgaeUrl.message} </p>
              )}
            </div>
            <div className="text-center mt-4">
              <button className="btn btn-outline-light">Create</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ViewVideoPage;
