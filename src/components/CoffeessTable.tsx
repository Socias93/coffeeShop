import { useNavigate } from "react-router-dom";
import { Recipe } from "../services/CoffeeRecipeService";
import { Favorite } from "./index";

interface Props {
  onDelete(id: string): void;
  recipes: Recipe[];
  onLike(id: string): void;
}

function CoffeesTable({ onDelete, recipes, onLike }: Props) {
  const navigate = useNavigate();

  return (
    <>
      <div className="container-lg px-3 py-3">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4 justify-content-center">
          {recipes.map((r) => (
            <div key={r.id} className="justify-content-center">
              <div className="p-3 border border-dark rounded-4 m-3">
                <div className="position-relative">
                  <img
                    src={
                      r.imageUrl instanceof FileList
                        ? URL.createObjectURL(r.imageUrl[0])
                        : r.imageUrl ?? "/bilder/4coffee.webp"
                    }
                    alt="Coffee image"
                    className="img-fluid w-100 rounded-3"
                    style={{ height: 150, objectFit: "cover" }}
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
                <div className="d-flex justify-content-between mt-3">
                  <button
                    onClick={() => navigate(`/viewcoffee/${r.id}`)}
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
                    onClick={() => onDelete(r.id)}
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

export default CoffeesTable;
