import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "./main-layout.scss";
import SideBar from "../components/SideBar/SideBar";
import NavBar from "../components/NavBar/NavBar";
import PreLoader from "../components/PreLoader/PreLoader";

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2300);
  }, []);

  return (
    <div className="container">
    {
      loading ? (
        <PreLoader loading={loading}/>
      ) : (
        <>
        <SideBar isOpen={isOpen} toggle={toggle} ref={ref} />
          <div className="main">
            <NavBar toggle={toggle} ref={ref} />
            <div className="main__content">
              <LoadingBar color="#f11946" ref={ref} shadow={true} />
              <Outlet ref={ref} />
            </div>
          </div>
        </>   
      )
    }
    </div >
  )
};

export default MainLayout;
