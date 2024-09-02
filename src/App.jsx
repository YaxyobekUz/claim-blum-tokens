import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// layouts
import MainRoot from "./layouts/MainRoot";

// pages
import Home from "./pages/Home";
import Docs from "./pages/Docs";
import Balance from "./pages/Balance";
import Account from "./pages/Account";
import BalanceHistory from "./pages/BalanceHistory";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainRoot />}>
          <Route index element={<Home />} />
          <Route path="docs" element={<Docs />} />
          <Route path="balance" element={<Balance />} />
          <Route path="account" element={<Account />} />
          <Route path="balance/history" element={<BalanceHistory />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
