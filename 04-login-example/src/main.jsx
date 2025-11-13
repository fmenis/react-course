import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // every component will be executed twice (not in production)
  <StrictMode>
    <App />
  </StrictMode>
);
