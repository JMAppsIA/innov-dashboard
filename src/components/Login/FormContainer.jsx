import React from "react";
import Text from "../Text/Text";

const FormContainer = ({ children, title, subTitle, image }) => {
  return (
    <div className="login-form-container">
      <div className="login-form-wrapper">
        <div className="login-form-header">
          <div className="login-form-header-title-container">
            <Text h4 large>{title}</Text>
            <Text body1>{subTitle}</Text>
          </div>
          <Text>
            <img src={image} alt="form-img" width={70} height={70}/>
          </Text>
        </div>
        <form>
          {children}
        </form>
      </div>
    </div>
  );
};

export default FormContainer;
