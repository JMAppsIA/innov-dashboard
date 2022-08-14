import React from "react";
import Card from "./Card";
import image from "../../assets/images/illustration_login.png";
import Header from "./Header";
import FormContainer from "./FormContainer";
import Input from "../Input/Input";
import Button from "../Button/Button";
import logoBackground from "../../assets/images/dashboard-logo.svg";
import "./login.scss";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="login-container">
      <Header optionTitle={`No tienes una cuenta?`} optionLink={`Registrate`} />
      <Card title={`Hola!, Bienvenido de vuelta.`} {...{ image }} />
      <FormContainer
        title={`Ingresa a Innov Dashboard`}
        subTitle={`Ingresa tus credenciales debajo`}
        image={logoBackground}
      >
        <div className="row">
          <div className="col-12 col-md-12">
            <Input type={`email`} id={`email`} label={`Ingresa tu correo`} />
          </div>
          <div className="col-12 col-md-12 input-mt">
            <Input type={`password`} id={`password`} label={`Ingresa tu clave`} />
          </div>
          <div className="col-12 col-md-12 input-mt">
            <Button primary onClick={() => navigate('/dashboard/app')}>{`Ingresar`}</Button>
          </div>
        </div>
      </FormContainer>
    </div>
  );
};

export default LoginComponent;
