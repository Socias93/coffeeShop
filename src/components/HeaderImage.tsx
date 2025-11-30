import { useNavigate } from "react-router-dom";

function HeaderImage() {
  const navigate = useNavigate();
  return (
    <section className="position-relative">
      <img
        style={{ width: "100%", height: "45vh" }}
        src="/bilder/newnewcoffee.jpg"
        alt="Coffee Background image"></img>
      <div className="row col position-absolute top-50 start-50 translate-middle text-white text-start">
        <h1>
          Discover <p className="mb-0">Coffee Recipes</p>& Inspo
        </h1>
        <div className="mt-2">
          <button
            onClick={() => navigate("/allrecipes")}
            className="bg-dark text-white rounded-3"
            style={{ textDecoration: "none" }}>
            View Recipes
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeaderImage;
