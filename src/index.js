import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import CartProvider from "./providers/cart/cart.provider.jsx";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <CartProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </CartProvider>,
  document.getElementById("root")
);
