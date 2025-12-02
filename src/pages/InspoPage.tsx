import { useState } from "react";
import { getVideos } from "../services/fakeInspoService";
import { useNavigate } from "react-router-dom";

function InspoPage() {
  const [videos, setVideos] = useState(getVideos());
  const navigate = useNavigate();

  function onDelete(id: string) {
    const newVideo = videos.filter((video) => video.id !== id);
    setVideos(newVideo);
  }

  if (videos.length === 0)
    return (
      <div className="vh-100 d-grid justify-content-center align-content-center">
        <h2>There are no videos in the database</h2>
        <div className="text-center mt-2">
          <button
            onClick={() => navigate("/create/new/video")}
            className="btn btn-outline-light">
            Create new viedo inspo
          </button>
        </div>
      </div>
    );

  return (
    <>
      <div className="container-lg px-3 py-3">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
          {videos.map((video) => (
            <div key={video.id} className="col d-flex">
              <div
                className="p-3 border border-dark rounded-4 m- d-flex flex-column w-100"
                style={{ minHeight: 320, minWidth: 350 }}>
                <div className="position-relative">
                  <img
                    src={video.imgaeUrl}
                    alt="Coffee image"
                    className="img-fluid w-100 rounded-3"
                    style={{ height: 150, objectFit: "cover" }}
                  />
                </div>
                <h5 className="mt-2 mb-1">{video.title}</h5>
                <div className="d-flex justify-content-between mt-auto">
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
    </>
  );
}

export default InspoPage;
