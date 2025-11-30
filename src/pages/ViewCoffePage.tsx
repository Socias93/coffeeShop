import { useParams } from "react-router-dom";

function ViewCoffeePage() {
  const { id } = useParams();
  return (
    <>
      <div className="row bg-dark">
        <div className="col">
          <img
            className="vh-100"
            src="/bilder/4coffee.webp"
            alt="Coffee Picture"
          />
        </div>
        <form className="col">
          <div className="d-grid justify-content-center">
            <label className="form-label text-light">{id} </label>
            <input className="form-control" />
          </div>
        </form>
      </div>
    </>
  );
}

export default ViewCoffeePage;
