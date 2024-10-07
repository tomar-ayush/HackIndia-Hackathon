import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./Dashboard/SideBar";
import Header from "./Dashboard/Header";

const Layout = () => {
  return (
    <div className="flex text-white max-h-screen h-screen bg-black">
      <SideBar />
      <div className="flex lg:flex-row flex-1">
        <div className="flex  flex-col w-full h-screen overflow-hidden">
          <Header />

          <div className="flex-1 overflow-y-auto hide-scrollbar">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
