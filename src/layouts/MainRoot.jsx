import React from "react";
import { Outlet } from "react-router-dom";

// components
import LayoutTabs from "../components/LayoutTabs";

const MainRoot = () => {
  return (
    <div className="overflow-hidden h-screen">
      {/* body */}
      <div className="h-[calc(100%-68px)] overflow-auto">
        <Outlet />
      </div>

      {/* layout tabs */}
      <LayoutTabs />
    </div>
  );
};

export default MainRoot;
