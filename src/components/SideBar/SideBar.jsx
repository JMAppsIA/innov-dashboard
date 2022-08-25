import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./sidebar.scss";
import logo from "../../assets/images/dashboard-logo.svg";
import Button from "../Button/Button";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { data } from "../../constants";
import Text from "../Text/Text";
import SideBarItem from "./SideBarItem";
import footerBg from "../../assets/images/sidebar-footer.png";

const SideBar = ({ isOpen, toggle, ref }) => {
  const navigate = useNavigate();
  const closeSidebar = () => {
    // document.querySelector(".main").style.transform = "scale(1) translateX(0)";
    setTimeout(() => {
      document.body.classList.remove("sidebar-open");
      document
        .getElementsByClassName("toggle__sidebar")[0]
        .classList.remove("toggle__hidden");
      document.querySelector(".main").style = "";
    }, 500);
  };
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__header">
          <div className="sidebar__header__logo__container">
            <div
              className="sidebar__header__logo"
              onClick={() => {
                ref.current.complete();
                navigate("/dashboard/app");
                toggle();
              }}
            >
              <img src={logo} alt="logo" />
            </div>
            <div className="sidebar__header__icon">
              <Button icon>
                <FaAngleDoubleLeft size={18} />
              </Button>
            </div>
          </div>
          <Link
            to={`/dashboard/user/account`}
            className="sidebar__header__account__link"
          >
            <div className="sidebar__header__account__container">
              <div className="sidebar__header__account__image__container">
                <img
                  src={data.user.avatar}
                  alt="avatar"
                  className="sidebar__header__account__image"
                />
              </div>
              <div className="sidebar__header__account__details">
                <Text small title>
                  {data.user.name}
                </Text>
                <Text xSmall body1>{`Admin`}</Text>
              </div>
            </div>
          </Link>
        </div>
        <div className="sidebar__body">
          {data.modulesv2.map((module, index) => (
            <SideBarItem
              key={`item-${index}`}
              module={module}
              toggle={closeSidebar}
            />
          ))}
        </div>
        <div className="sidebar__footer">
          <img src={footerBg} alt="" />
          <div className="sidebar__footer__container">
            <div className="sidebar__footer__description">
              <Text small title>{`Hola, ${data.user.name}`}</Text>
              <Text xSmall body1>{`Necesitas ayuda?`}</Text>
              <Text xSmall body1>{`Por favor, contactanos.`}</Text>
            </div>
            <Button primary xSmall>{`Contactar`}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
