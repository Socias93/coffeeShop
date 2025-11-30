import { NavLink } from "react-router-dom";

function NotfoundPage() {
  return (
    <div className="vh-100 grid justify-content-center">
      <h1 className="text-center">404 page not found</h1>;
      <div className="text-center">
        <NavLink to={"/"} className="btn btn-outline-dark">
          Go back to homepage
        </NavLink>
      </div>
    </div>
  );
}

export default NotfoundPage;
