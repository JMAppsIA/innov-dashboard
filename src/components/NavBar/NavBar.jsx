import React, { useCallback, useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiMenuAlt1 } from "react-icons/hi";
import Button from "../Button/Button";
import UserInfo from "../UserInfo/UserInfo";
import "./nav-bar.scss";
import { data } from "../../constants";

const NavBar = ({ isOpen }) => {
  const searchEl = useRef();

  const openSidebar = () => {
    document.body.classList.add('sidebar-open')
    document.getElementsByClassName('toggle__sidebar')[0].classList.add('toggle__hidden')
  }

  
  const [isOpenSearchInput, setOpenSearchInput] = useState(false);

  const toggleSearchInput = useCallback(() => {
    setOpenSearchInput(!isOpenSearchInput);
  },[isOpenSearchInput]);

  // Hide search input if clicked outside of it
  const handleClickOutside = useCallback(
    (e) => {
      if (
        isOpenSearchInput &&
        e.target.className === "main__content" &&
        e.target !== searchEl.current
      ) {
        toggleSearchInput();
      }
    },
    [searchEl, isOpenSearchInput, toggleSearchInput]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="navbar">
      {console.log(isOpen)}
      <div className="navbar__container">
        <div className="toggle__sidebar" onClick={openSidebar}>
          <Button icon>
            <HiMenuAlt1 size={20} />
          </Button>
        </div>
        <div className="navbar__search">
          <Button icon onClick={() => setOpenSearchInput(!isOpenSearchInput)}>
            <FiSearch size={20} />
          </Button>
        </div>
        <div
          ref={searchEl}
          className="navbar__search__input"
          style={{
            display: isOpenSearchInput ? "flex" : "flex",
            top: isOpenSearchInput ? "0" : "-100%",
            boxShadow: !isOpenSearchInput && "none",
          }}
        >
          <div className="navbar__container__search__input__wrapper">{`hello`}</div>
        </div>
        <div className="fg-1"></div>
        <UserInfo user={data.user} />
      </div>
    </div>
  );
};

export default NavBar;
