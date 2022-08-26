import React from "react";
import "./home.scss";
import MainCard, { CardSlider, SalesCard } from "../Card/Card";
import mainCardImage from "../../assets/images/main-card-image.svg";
import Widget from "../Widget/Widget";

const HomeComponent = ({ translation }) => {
  return (
    <div className="home">
      <div className="row">
        <div className="col-8 col-md-12">
          <MainCard
            translation={translation}
            title={translation("home.mainCard.title")}
            description={translation("home.mainCard.subTitle")}
            buttonTitle={`${translation("home.mainCard.buttonTitle")} 🚀`} 
            image={mainCardImage}
          />
        </div>
        <div className="col-4 col-md-12">
          <CardSlider />
        </div>
      </div>
      <div className="row mt">
        <div className="col-4 col-md-12">
          <Widget title={`Total Active Users`} description={`+2.6%`} footer={`13,451`}/>
        </div>
        <div className="col-4 col-md-12">
          <Widget title={`Total Active Users`} description={`+2.6%`} footer={`13,451`}/>
        </div>
        <div className="col-4 col-md-12">
          <Widget title={`Total Active Users`} description={`+2.6%`} footer={`13,451`}/>
        </div>
      </div>
      <div className="row mt">
        <div className="col-4 col-md-12">
          <SalesCard 
            translation={translation}
            title={translation("home.salesCard.title")}
            description={translation("home.salesCard.subTitle")}
          />
        </div>
        <div className="col-8 col-md-12"></div>
      </div>
    </div>
  );
};

export default HomeComponent;
