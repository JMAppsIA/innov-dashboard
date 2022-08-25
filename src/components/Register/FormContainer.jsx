import React from "react";
import FormProvider from "../../hook-form/FormProvider";
import Text from "../Text/Text";

const FormContainer = ({ children, title, subTitle, image, translation, methods, onSubmit }) => {
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
        <FormProvider methods={methods} {...{onSubmit}}>
            {children}
        </FormProvider>
        <div className="input-mt">
          <Text body1>{translation("authentication.register.form.terms")}</Text>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
