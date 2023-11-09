import React from "react";
import { NavbarWrapper } from "../css/NavBars/Navbar";
import { Logout } from "./Logout";
import { ThemeToggle } from "./ThemeToggle";
import { UILogo } from ".";

export const NavBar = () => {
  return (
    <NavbarWrapper>
      <div className="nav-center">
        <button
          type="button"
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
