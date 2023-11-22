import React, { createContext, useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { SmallSideBar } from "../../components/SmallSideBar";
import { BigSiderBar } from "../../components/BigSideBar";
import { NavBar } from "../../components/NavBar";
import { DashboardWrappter } from "../../css/Dasboard/DashboardWrapper";
import { checkDefaultTheme } from "../../App";
import { GetCurrentUserAPI, logoutAPI } from "../../api/api";
import { useCookies } from "react-cookie";

export const DashboardContext = createContext({});

export const DashboardLayout = () => {
  const [cookies, setCookie] = useCookies(["token"]);

  const [showSidebar, setShowSidebar] = useState(false);
  const [userData, setUserData] = useState({});
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const fetchUser = async () => {
    try {
      const res = await GetCurrentUserAPI({ token: cookies.token });
      setUserData(res.user);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  if (!userData) return;
  return (
    <DashboardContext.Provider
      value={{
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        user: userData?.name,
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
