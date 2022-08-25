import React from "react";
import { useForm } from "react-hook-form";

import Card from "./Card";
import image from "../../assets/images/illustration_login.png";
import Header from "./Header";
import FormContainer from "./FormContainer";
import Input from "../Input/Input";
import Button from "../Button/Button";
import logoBackground from "../../assets/images/dashboard-logo.svg";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Checkbox from "../Checkbox/Checkbox";

const LoginComponent = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("global");

  // const [showPassword, setShowPassword] = useState(false);

  const defaultValues = {
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
    <div className="login-container">
      <Header
        optionTitle={t("authentication.login.header.title")}
        optionLink={t("authentication.login.header.link")}
      />
      <Card title={t("authentication.login.title")} {...{ image }} />
      <FormContainer
        title={t("authentication.login.form.title")}
        subTitle={t("authentication.login.form.subTitle")}
        image={logoBackground}
        methods={methods}
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <div className="row">
          <div className="col-12 col-md-12">
            <Input
              translation={t}
              type={`email`}
              name={`email`}
              id={`email`}
              label={t("authentication.login.form.email")}
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
              label={t("authentication.login.form.password")}
              register={{ ...register(`password`, { required: true }) }}
              validation={errors}
            />
          </div>
          <div className="col-6 col-md-6 input-mt">
            <Checkbox label={`Remember me`} />
          </div>
          <div className="col-6 col-md-6 input-mt">
            <Link to={`forgot-password`}>{`Forgot password?`}</Link>
          </div>
          <div className="col-12 col-md-12 input-mt">
            <Button primary type={`submit`}>
              {t("authentication.login.button")}
            </Button>
          </div>
        </div>
      </FormContainer>
    </div>
  );
};

export default LoginComponent;
