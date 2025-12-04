import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const location = useLocation();

  useEffect(() => {
    setSearchValue("");
  }, [location.pathname]);

  return (
    <>
      <div className="app-container">
        <Navbar value={searchValue} onChange={setSearchValue} />
        <Outlet context={{ searchValue, setSearchValue }} />
      </div>
    </>
  );
}
export default App;
