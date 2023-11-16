import React, { createContext, useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { SmallSideBar } from "../../components/SmallSideBar";
import { BigSiderBar } from "../../components/BigSideBar";
import { NavBar } from "../../components/NavBar";
import { DashboardWrappter } from "../../css/Dasboard/DashboardWrapper";
import { checkDefaultTheme } from "../../App";
import { logoutAPI } from "../../api/api";

export const DashboardContext = createContext({});

export const DashboardLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());
  const navigation = useNavigate();
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    console.log("dark theme");
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  let user = "tester";
  return (
    <DashboardContext.Provider
      value={{
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        user,

      }}>
      <DashboardWrappter>
        <main className="dashboard">
          <SmallSideBar />
          <BigSiderBar />
          <div>
            <NavBar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </DashboardWrappter>
    </DashboardContext.Provider>
  );
};
