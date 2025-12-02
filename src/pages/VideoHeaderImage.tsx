function VideoHeaderImage() {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/bilder/longImage4.jpg"
              alt="Coffee Background image"
              className="d-block w-100"
              style={{ width: "100%", height: "45vh" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/bilder/longImage.jpg"
              alt="Coffee Background image"
              className="d-block w-100"
              style={{ width: "100%", height: "45vh" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/bilder/newnewcoffee.jpg"
              alt="Coffee Background image"
              className="d-block w-100"
              style={{ width: "100%", height: "45vh" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default VideoHeaderImage;
