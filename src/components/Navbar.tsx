import { NavLink } from "react-router-dom";
import { SearchBox, NavbarButtom, NavbarLi } from "./index";

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
        className="navbar navbar-expand-lg border-0 shadow-none body-tertiary"
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
          <NavbarButtom />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <NavbarLi />
            </ul>
            <SearchBox onChange={onChange} value={value} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
