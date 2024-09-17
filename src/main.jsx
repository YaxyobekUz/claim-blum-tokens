import React from "react";
import ReactDOM from "react-dom/client";

// components
import App from "./App.jsx";

// redux
import store from "./store/store.js";
import { Provider } from "react-redux";

// css (styles)
import "./index.css";
import "./assets/fonts/roobert-pro/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
