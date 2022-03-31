import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App children />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// Sobre o ReactRouter
// https://reactrouter.com/docs/en/v6/getting-started/tutorial
