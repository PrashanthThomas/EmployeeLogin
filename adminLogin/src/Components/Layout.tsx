import React from "react";
import CustomNav from "./Dashboard/CustomNav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <CustomNav></CustomNav>
      <Outlet />
    </div>
  );
};

export default Layout;
