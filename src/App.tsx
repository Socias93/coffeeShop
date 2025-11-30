import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <div className="app-container">
        <Navbar value={searchValue} onChange={setSearchValue} />
        <Outlet context={{ searchValue }} />
      </div>
    </>
  );
}
export default App;
