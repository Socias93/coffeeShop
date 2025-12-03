import { NavLink } from "react-router-dom";

function NavbarLi() {
  const color = "#e5e7eb";

  return (
    <>
      <li className="nav-item">
        <NavLink
          to={"/coffeepage"}
          className="nav-link"
          aria-current="page"
          style={{ color }}>
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={"/recipes"} className="nav-link" style={{ color }}>
          Recepies
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={"/about"} className="nav-link" style={{ color }}>
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={"/contact"} className="nav-link" style={{ color }}>
          Contact
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={"/viewcoffee/new"} className="nav-link" style={{ color }}>
          New recipe
        </NavLink>
      </li>
    </>
  );
}
export default NavbarLi;
