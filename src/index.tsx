// react
import React from "react";
import { createRoot } from "react-dom/client";

// components
import App from "./App";

// router dom
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("app");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Sobre o ReactRouter
// https://reactrouter.com/docs/en/v6/getting-started/tutorial
