import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Collection from "./store/Collection";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Collection>
    <App />
  </Collection>
);
