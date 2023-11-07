import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DashboardContext } from "../pages/Dashboard/DashboardLayout";
import { links } from "../utils/Links";

export const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar } = useContext(DashboardContext);
  return (
    <div className="nav-links">
      {links.map((link) => (
        <NavLink
          end
          onClick={isBigSidebar ? null : toggleSidebar}
          to={link.path}
          className={"nav-link"}
          key={link.title}>
          <span className="icon">{link.title}</span>
        </NavLink>
      ))}
    </div>
  );
};
