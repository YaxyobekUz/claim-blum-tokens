import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// layouts
import MainRoot from "./layouts/MainRoot";

// pages
import Home from "./pages/Home";
import Docs from "./pages/Docs";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainRoot />}>
          <Route index element={<Home />} />
          <Route path="docs" element={<Docs />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
