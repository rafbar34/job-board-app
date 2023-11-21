import React, { useContext } from "react";
import { NavbarWrapper } from "../css/NavBars/Navbar";
import { Logout } from "./Logout";
import { ThemeToggle } from "./ThemeToggle";
import { UILogo } from ".";
import { SmallSideBar } from "./SmallSideBar";
import { DashboardContext } from "../pages/Dashboard/DashboardLayout";

export const NavBar = () => {
  const width = window.innerWidth;
  const { showSidebar, toggleSidebar } = useContext(DashboardContext);
  return (
    <NavbarWrapper>
      <div className="nav-center">
        <button
          type="button"
          onClick={() => (width < 990 ? toggleSidebar() : "")}
          className="toggle-btn">
          <UILogo height={40} />
        </button>

        <h4 className="logo-text">Findy</h4>
        <div>
          <div className="btn-container">
            <ThemeToggle />
            <Logout />
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
};
