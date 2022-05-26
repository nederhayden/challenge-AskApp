// react
import React from "react";
import ReactDOM from "react-dom";

// components
import App from "./App";

// router dom
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// Sobre o ReactRouter
// https://reactrouter.com/docs/en/v6/getting-started/tutorial
