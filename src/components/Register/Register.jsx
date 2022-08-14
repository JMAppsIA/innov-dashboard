import React from "react";
import Card from "./Card";
import image from "../../assets/images/illustration_register.png";
import Header from "./Header";
import FormContainer from "./FormContainer";
import Input from "../Input/Input";
import Button from "../Button/Button";
import logoBackground from "../../assets/images/dashboard-logo.svg";
import "./register.scss";

const RegisterComponent = () => {
  return (
    <div className="register-container">
      <Header optionTitle={`Ya tienes una cuenta?`} optionLink={`Ingresa`} />
      <Card title={`Administra tu empresa de manera mas efectiva con Innov! `} {...{ image }} />
      <FormContainer
        title={`Empieza con nosotros.`}
        subTitle={`Primer mes gratis.`}
        image={logoBackground}
      >
        <div className="row">
          <div className="col-6 col-md-12">
            <Input type={`text`} id={`text`} label={`Como te llamas`} />
          </div>
          <div className="col-6 col-md-12 mobile-mt">
            <Input type={`text`} id={`text`} label={`Cual es tu apellido`} />
          </div>
          <div className="col-12 col-md-12 input-mt">
            <Input type={`email`} id={`email`} label={`Ingresa tu correo`} />
          </div>
          <div className="col-12 col-md-12 input-mt">
            <Input type={`password`} id={`password`} label={`Ingresa tu clave`} />
          </div>
          <div className="col-12 col-md-12 input-mt">
            <Button primary hasReflection>{`Registrarme`}</Button>
          </div>
        </div>
      </FormContainer>
    </div>
  );
};

export default RegisterComponent;
