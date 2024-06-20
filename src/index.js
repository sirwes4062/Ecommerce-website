import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ShopContextProvider from "./context/Shopcontext";
import ResponsiveProvider from "./context/responsive";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ResponsiveProvider>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </ResponsiveProvider>
);
