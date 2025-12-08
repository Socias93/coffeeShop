import { useEffect, useState } from "react";
import { deleteVideo, getVideos, InspoVideo } from "../services/InspoService";
import { useNavigate, useOutletContext } from "react-router-dom";

function InspoPage() {
  const { searchValue } = useOutletContext<{
    searchValue: string;
  }>();
  const [videos, setVideos] = useState<InspoVideo[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetch() {
      const { data: videos } = await getVideos();

      setVideos(videos);
    }

    fetch();
  }, []);

  function onDelete(id: string) {
    const newVideo = videos.filter((video) => video.id !== id);
    setVideos(newVideo);
    deleteVideo(id);
  }

  const filtredVideos = searchValue
    ? videos.filter((v) =>
        v.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    : videos;

  if (videos.length === 0)
    return (
      <div className="vh-100 d-grid justify-content-center align-content-center">
        <h2>There are no videos in the database</h2>
        <div className="text-center mt-2">
          <button
            onClick={() => navigate("/create/new/video")}
            className="btn btn-outline-light">
            Create new video inspo
          </button>
        </div>
      </div>
    );

  const coffeeMugg = <i className="fa-solid fa-mug-saucer"></i>;

  return (
    <>
      <div className="container-lg px-3 py-3">
        <h1 className="text-center m-3">{coffeeMugg} Coffee inspo</h1>
        <div className="d-flex row row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center g-5">
          {filtredVideos.map((video) => (
            <div key={video.id} className="col d-flex justify-content-center">
              <div
                className="shadow-sm m-1 justify-content-center border border-dark rounded-4 d-flex flex-column w-100 h-100"
                style={{
                  minHeight: 220,
                  minWidth: 250,
                  maxWidth: 500,
                  maxHeight: 400,
                }}>
                <div className="position-relative">
                  <img
                    src={video.imageUrl}
                    alt="Coffee image"
                    className="img-fluid w-100 rounded-3"
                    style={{ height: 200, objectFit: "cover" }}
                  />
                </div>
                <h5 className="text-center mt-2">{video.title}</h5>
                <div className="d-flex justify-content-between m-4">
                  <button
                    onClick={() => window.open(video.videoUrl)}
                    className="rounded-2"
                    style={{
                      width: "50%",
                      height: "6vh",
                      backgroundColor: "#121212",
                      color: "#e5e7eb",
                    }}>
                    View
                  </button>
                  <button
                    onClick={() => onDelete(video.id)}
                    className="rounded-2 ms-3"
                    style={{
                      width: "50%",
                      backgroundColor: "#121212",
                      color: "#e5e7eb",
                    }}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-4">
        <button
          onClick={() => navigate("/create/new/video")}
          className="btn btn-outline-secondary px-4"
          style={{ height: "48px" }}>
          Create new inspo
        </button>
      </div>
    </>
  );
}

export default InspoPage;
