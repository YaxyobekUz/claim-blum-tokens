import React from "react";
import { Outlet, useLocation } from "react-router-dom";

// components
import LayoutTabs from "../components/LayoutTabs";

const MainRoot = () => {
  const location = useLocation();
  const isClaimTokensPage = location.pathname === "/claim-tokens";

  return (
    <div className="overflow-hidden h-screen">
      {/* body */}
      <div
        className={`${
          isClaimTokensPage ? "h-full" : "h-[calc(100%-68px)]"
        } overflow-auto scroll-smooth"`}
      >
        <Outlet />
      </div>

      {/* layout tabs */}
      {!isClaimTokensPage && <LayoutTabs />}
    </div>
  );
};

export default MainRoot;
