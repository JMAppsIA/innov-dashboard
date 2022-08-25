import React from "react";
import logo from "../../assets/images/dashboard-logo.svg";
import "./pre-loader.scss";

const PreLoader = ({ loading }) => {
  return (
    <div className="preloader">
      <div className="preloader__logo">
        <img src={logo} alt="" />
      </div>
      <div className="preloader__border">
        <div className="preloader__border__1">
          <div className="preloader__border__core"></div>
        </div>
        <div className="preloader__border__2">
          <div className="preloader__border__core"></div>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
