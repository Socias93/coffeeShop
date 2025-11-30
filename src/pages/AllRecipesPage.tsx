import { getRecipes } from "../services/fakeCoffeeRecipeService";

function AllRecipesPage() {
  const recipes = getRecipes();
  return (
    <>
      <div className="vh-100" style={{ backgroundColor: "#121212" }}>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Ingridience</th>
              <th scope="col">Description</th>
              <th>Steps</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((r) => (
              <tr key={r.id}>
                <td>{r.title} </td>
                <td>{r.category?.name}</td>
                <td>{r.ingredients}</td>
                <td>{r.description}</td>
                <td>{r.steps}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AllRecipesPage;
