// React/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css"; // garante que seu CSS global seja carregado

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
