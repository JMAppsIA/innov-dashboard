import React, { useState } from "react";
import Text from "../Text/Text";
import { BiChevronRight } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const SideBarItem = ({ module, toggle }) => {
  const [open, setOpen] = useState(false);
  const { title, options } = module;

  if (module.options) {
  }

  return (
    <>
      <ul className="sidebar__body__list">
        <li className="sidebar__body__list__header">{title}</li>
        {options.map((option, index) => (
          <div>
            <NavLink
              className={`sidebar__body__list__option`}
              activeClassName={`active`}
              to={option.link || `#`}
              onClick={() => option.hasSubOptions ? setOpen(!open) : toggle}
            >
              {option.icon}
              <div className="sidebar__body__list__option__title">
                <Text xSmall>{option.title}</Text>
              </div>
              {option.hasSubOptions && (
                <BiChevronRight
                  size={24}
                  className="toggle__btn"
                  style={{
                    transition: `transform .3s`,
                    transform: open ? `rotate(90deg)` : `rotate(0deg)`,
                  }}
                />
              )}
            </NavLink>
            {option.subOptions.length > 0 &&
              option.subOptions.map((subOption, index) => (
                <div className={`sidebar__body__sublist ${open && `open`}`}>
                  <NavLink
                    className="sidebar__body__sublist__option"
                    to={subOption?.link || `#`}
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
        ))}
      </ul>
    </>
  );
};

export default SideBarItem;
