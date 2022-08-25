import React from "react";
import Card from "./Card";
import image from "../../assets/images/illustration_register.png";
import Header from "./Header";
import FormContainer from "./FormContainer";
import Input from "../Input/Input";
import Button from "../Button/Button";
import logoBackground from "../../assets/images/dashboard-logo.svg";
import "./register.scss";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const RegisterComponent = () => {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    remember: true,
  };

  const methods = useForm({
    defaultValues,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onFormSubmit = async (data) => {
    console.log("dataaa -> ", data);
    navigate("/dashboard/app");
  };

  return (
    <div className="register-container">
      <Header
        optionTitle={t("authentication.register.header.title")}
        optionLink={t("authentication.register.header.link")}
      />
      <Card title={t("authentication.register.disclaimer")} {...{ image }} />
      <FormContainer
        title={t("authentication.register.form.title")}
        subTitle={t("authentication.register.form.subTitle")}
        image={logoBackground}
        translation={t}
        methods={methods}
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <div className="row">
          <div className="col-6 col-md-12">
            <Input
              translation={t}
              type={`text`}
              name={`firstName`}
              id={`firstName`}
              label={t("authentication.register.form.firstName")}
              register={{ ...register(`firstName`, { required: true }) }}
              validation={errors}
            />
          </div>
          <div className="col-6 col-md-12 mobile-mt">
            <Input
              translation={t}
              type={`text`}
              name={`lastName`}
              id={`lastName`}
              label={t("authentication.register.form.lastName")}
              register={{ ...register(`lastName`, { required: true }) }}
              validation={errors}
            />
          </div>
          <div className="col-12 col-md-12 input-mt">
            <Input
              translation={t}
              type={`email`}
              name={`email`}
              id={`email`}
              label={t("authentication.register.form.email")}
              register={{ ...register(`email`, { required: true }) }}
              validation={errors}
            />
          </div>
          <div className="col-12 col-md-12 input-mt">
            <Input
              translation={t}
              type={`password`}
              name={`password`}
              id={`password`}
              label={t("authentication.register.form.password")}
              register={{ ...register(`password`, { required: true }) }}
              validation={errors}
            />
          </div>
          <div className="col-12 col-md-12 input-mt">
            <Button primary hasReflection>
              {t("authentication.register.button")}
            </Button>
          </div>
        </div>
      </FormContainer>
    </div>
  );
};

export default RegisterComponent;
