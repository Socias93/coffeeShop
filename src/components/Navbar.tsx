import { NavLink } from "react-router-dom";
import SearchBox from "./SearchBox";

interface Props {
  value: string;
  onChange(value: string): void;
}

function Navbar({ onChange, value }: Props) {
  const color = "#e5e7eb";

  return (
    <>
      <style>{`
        .placeholder-white::placeholder { color: #fff; opacity: 1; }
`}</style>
      <nav
        className="navbar navbar-expand-lg border-0 shadow-none"
        style={{
          backgroundColor: "#121212",
        }}>
        <div
          className="container-fluid"
          style={{
            backgroundColor: "#121212",
          }}>
          <NavLink to={"/"} className="navbar-brand" style={{ color }}>
            Coffee Shop
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
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
                <NavLink
                  to={"/viewcoffee/new"}
                  className="nav-link"
                  style={{ color }}>
                  New recipe
                </NavLink>
              </li>
            </ul>
            <SearchBox onChange={onChange} value={value} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
