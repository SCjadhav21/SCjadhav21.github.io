import { useEffect } from "react";
import "./App.css";
import Navbar from "./compo/Navbar";

function App() {
  useEffect(() => {
    document.title = "Suraj_Jadahv_portfolio";
  }, []);
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
