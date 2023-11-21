import React, { useContext } from "react";
import { SidebarWrapper } from "../css/NavBars/SmallSidebar";
import { DashboardContext } from "../pages/Dashboard/DashboardLayout";
import { NavLinks } from "./NavLinks";

export const SmallSideBar = () => {
  const { showSidebar, toggleSidebar } = useContext(DashboardContext);
  return (
    <SidebarWrapper>
      <div
        className={
          showSidebar ? "side-container show-sidebar" : "side-container"
        }>
        <div className="content">
          <button
            onClick={toggleSidebar}
            type="button"
            className="close-btn">
            Iconddd
          </button>
          <header>logo</header>
          <NavLinks />
        </div>
      </div>
    </SidebarWrapper>
  );
};
