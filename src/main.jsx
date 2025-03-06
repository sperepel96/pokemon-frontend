// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  //TODO: розкоментити коли буду заливати, в дев моді  стейти два рази відпрацьовуюють

  // <StrictMode>
  <App />,
  // </StrictMode>,
);
