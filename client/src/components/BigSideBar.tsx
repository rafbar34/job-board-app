import React, { useContext } from "react";
import { DashboardContext } from "../pages/Dashboard/DashboardLayout";
import { NavLinks } from "./NavLinks";
import { SidebarWrapper } from "../css/NavBars/BigSidebar";

export const BigSiderBar = () => {
  const { showSidebar } = useContext(DashboardContext);
  return (
    <SidebarWrapper>
      <div
        className={
          showSidebar ? "sidebar-container" : "show-sidebar sidebar-container"
        }>
        <NavLinks isBigSidebar />
      </div>
    </SidebarWrapper>
  );
};
