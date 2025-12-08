import { zodResolver } from "@hookform/resolvers/zod";
import { schema, videoData } from "./schemas/VideoSchema";
import { useForm } from "react-hook-form";
import VideoHeaderImage from "./VideoHeaderImage";
import { useNavigate } from "react-router-dom";
import { saveVideo } from "../services/InspoService";

function ViewVideoPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<videoData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: videoData) {
    try {
      await saveVideo(data);
      navigate("/inspo");
    } catch (err) {
      console.error("Save failed", err);
    }
  }

  const inputErrors = `form-control bg-${
    errors.title ? "danger-subtle" : "dark"
  } ${errors.title ? "" : "text-white"}`;

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
                className={inputErrors}
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
                className={inputErrors}
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
                {...register("imageUrl")}
                className={inputErrors}
                type="text"
              />
              {errors.imageUrl && (
                <p className="text-danger">{errors.imageUrl.message} </p>
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
