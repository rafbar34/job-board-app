import React from "react";
import { Link } from "react-router-dom";
import { LandingWrapper } from "../../css/LandingStyle/LandingPageStyle";
import { UILogo } from "../../components";
export const LandingPage = () => {
  return (
    <LandingWrapper>
      <nav>
        <UILogo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Get <span>job</span>
          </h1>
          <p>
            Hello, please login or register to use job offer platform.<br/>
            Are you recruter or maybe are you tired pay money for possible put
            job offer? You can do it for free on Jobify
          </p>
          <Link
            to="/register"
            className="btn register-link">
            Register
          </Link>
          <Link
            to="/login"
            className="btn">
            Login
          </Link>
        </div>
        <img className="img main-img"></img>
      </div>
    </LandingWrapper>
  );
};
