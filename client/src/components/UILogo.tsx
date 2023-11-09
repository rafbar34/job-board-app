import React from "react";
import logo from "../assets/logo.png";

export const UILogo = ({height=70}) => {
  return (
    <img
      height={height}
      src={logo}
      className="logo"
      alt=""
    />
  );
};
