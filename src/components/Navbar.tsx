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
          <a className="navbar-brand" style={{ color }}>
            Coffee Shop
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" style={{ color }}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color }}>
                  Recepies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color }}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color }}>
                  Contact
                </a>
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
