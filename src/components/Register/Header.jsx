import React from "react";
import { Link } from "react-router-dom";

import Text from "../Text/Text";
import logoBackground from '../../assets/images/dashboard-logo.svg';

const Header = ({optionTitle, optionLink}) => {
  return (
    <header className="login-header">
      <div className="login-header-image-container">
      <img src={logoBackground} alt="dashboard-logo"/>
      </div>
      <Text xSmall regular style={{ marginTop: -16 }}>
        {`${optionTitle} `}
        <Link to={`/auth/login`} className="login-header-option-link">
            {optionLink}
        </Link>
      </Text>
    </header>
  );
};

export default Header;
