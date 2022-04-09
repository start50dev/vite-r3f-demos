import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
import App from "../Demos/Boxcube";

const rootElement = document.getElementById("root");

// non-null (!) assertion
const root = ReactDOM.createRoot(rootElement!);
// use type assertion
// const root = createRoot(rootElement as Element);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

//
