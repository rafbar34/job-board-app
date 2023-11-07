import React, { useContext } from "react";
import { DashboardContext } from "../pages/Dashboard/DashboardLayout";
import { WrapperDarkTheme } from "../css/NavBars/WrapperDarkTheme";

export const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useContext(DashboardContext);
  return (
    <WrapperDarkTheme onClick={toggleDarkTheme}>
      {isDarkTheme ? "Dark" : "Light"}
    </WrapperDarkTheme>
  );
};
