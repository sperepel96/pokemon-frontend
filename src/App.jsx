import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sandbox from "./pages/Sandbox/index.jsx";
import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize.js";
import "rc-collapse/assets/index.css";
import M from "materialize-css";
import { useEffect } from "react";
import Login from "./pages/Login/index.jsx";
import { Wrapper } from "./pages/Wrapper/index.jsx";

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Wrapper />} />
          <Route path="/sandbox" element={<Sandbox />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
