import React, { useState } from "react";
import Text from "../Text/Text";
import { BiChevronRight } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const SideBarItem = ({ module, toggle }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <ul className="sidebar__body__list">
        {/* <li className="sidebar__body__list__header">{module.title}</li> */}
        <div>
          <NavLink
            className={`sidebar__body__list__option`}
            activeClassName={`active`}
            to={module.path || `#`}
            onClick={module.subNav && showSubnav}
          >
            {module.icon}
            <div className="sidebar__body__list__option__title">
              <Text xSmall>{module.title}</Text>
            </div>
            {module.subNav && (
              <BiChevronRight
                size={24}
                className="toggle__btn"
                style={{
                  transition: `transform .3s`,
                  transform: subnav ? `rotate(90deg)` : `rotate(0deg)`,
                }}
              />
            )}
          </NavLink>
          {subnav && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                minHeight: 0,
                height: `auto`,
                transition: `height 0.3s ease-in-out`,
              }}
            >
              {module.subNav.map((subOption, index) => (
                <div className={`sidebar__body__sublist`} key={index}>
                  <NavLink
                    className="sidebar__body__sublist__option"
                    to={subOption?.path}
                    activeClassName={`active`}
                    onClick={toggle}
                  >
                    <BsCheck size={12} />
                    <div className="sidebar__body__sublist__option__title">
                      <Text xSmall title>
                        {subOption.title}
                      </Text>
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
          )}
        </div>
      </ul>
    </>
  );
};

export default SideBarItem;
