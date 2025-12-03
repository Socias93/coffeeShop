import { Link } from "react-router-dom";

function CoffeeInfo() {
  return (
    <div className="d-flex justify-content-center gap-2  gap-md-5 gap-lg-5 my-3">
      <div className="text-center">
        <i className="fa-regular fa-face-smile"></i>
        <Link
          to={"/recipes"}
          style={{ textDecoration: "none", color: "white" }}>
          <h4>Easy Recepies</h4>
        </Link>
      </div>
      <div className="text-center">
        <i className="fa-solid fa-mug-saucer"></i>
        <Link to={"/beans"} style={{ textDecoration: "none", color: "white" }}>
          <h4>Premium Beans</h4>
        </Link>
      </div>
      <div className="text-center">
        <i className="fa-regular fa-lightbulb"></i>
        <Link to={"/inspo"} style={{ textDecoration: "none", color: "white" }}>
          <h4>Coffee Inspo</h4>
        </Link>
      </div>
    </div>
  );
}

export default CoffeeInfo;
