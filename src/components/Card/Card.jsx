import React from "react";
import Button from "../Button/Button";
import Text from "../Text/Text";
import "./card.scss";

const MainCard = ({ translation, title, description, buttonTitle, image }) => {
  return (
    <div className="card__main">
      <div className="card__main__text__container">
        <Text title>{title}</Text>
        <Text body1 small style={{
          paddingBottom: 40
        }}>{description}</Text>
        <Button xs>{buttonTitle}</Button>
      </div>
      <div className="card__main__image__container">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default MainCard;

export const CardSlider = () => {
  return (
    <>{`CardSlider`}</>
  )
};
