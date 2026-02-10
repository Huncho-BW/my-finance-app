import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom"; // <-- new
import "./index.css";
import "./budget.css";
import "./pot.css";
import "./recurring.css";
import App from "./App.jsx";
import "@fontsource/public-sans"; // defaults to weight 400

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
