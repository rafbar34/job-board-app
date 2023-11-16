import React, { useContext, useState } from "react";
import { DashboardContext } from "../pages/Dashboard/DashboardLayout";
import { LogoutWrapper } from "../css/Auth/LogoutWrapper";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useContext(DashboardContext);
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();
  const logout =  () => {
    navigate("/login");
    removeCookie("token");
  };
  return (
    <LogoutWrapper>
      <button
        onClick={() => setShowLogout(!showLogout)}
        type="button"
        className="btn logout-btn">
        {user}
      </button>
      <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
        <button
          onClick={() => logout()}
          type="button"
          className="dropdown-btn">
          logout
        </button>
      </div>
    </LogoutWrapper>
  );
};
