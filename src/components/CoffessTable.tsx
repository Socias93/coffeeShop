import { useNavigate } from "react-router-dom";
import { Recipe } from "../services/fakeCoffeeRecipeService";
import Favorite from "./Favorite";

interface Props {
  onDelete(id: string): void;
  recipes: Recipe[];
  onLike(id: string): void;
}

function CoffeesTable({ onDelete, recipes, onLike }: Props) {
  const navigate = useNavigate();

  return (
    <>
      <div className="row row cols-4 text-center mt-4">
        {recipes.map((r) => (
          <div key={r.id} className="col-3">
            <div className="p-3 border border-dark rounded-4 h-80 m-3">
              <div className="position-relative">
                <img
                  src={r.imageUrl}
                  alt="Coffee image"
                  className="img-fluid w-100 rounded-3"
                  style={{ height: 100, objectFit: "cover" }}
                />
                <div className="position-absolute top-0 end-0 p-2">
                  <Favorite
                    isLiked={Boolean(r.liked)}
                    onLiked={() => onLike(r.id)}
                  />
                </div>
              </div>
              <h5 className="mt-2 mb-1">{r.title}</h5>
              <p className="small mb-0">{r.description}</p>
              <div className="d-flex justify-content-between m-4">
                <button
                  onClick={() => navigate(`/viewcoffee/${r.id}`)}
                  className="rounded-2"
                  style={{
                    width: "40%",
                    height: "6vh",
                    backgroundColor: "#121212",
                    color: "#e5e7eb",
                  }}>
                  View
                </button>
                <button
                  onClick={() => onDelete(r.id)}
                  className="rounded-2"
                  style={{
                    width: "40%",
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
    </>
  );
}

export default CoffeesTable;
