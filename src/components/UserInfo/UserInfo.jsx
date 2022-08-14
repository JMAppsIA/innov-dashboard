import React from "react";
import "./user-info.scss";

import { IoNotifications, IoPeople } from "react-icons/io5";

import flagEn from "../../assets/images/ic_flag_en.svg";
import Button from "../Button/Button";

const UserInfo = ({ user }) => {
  return (
    <div className="user__info">
      <div className="user__info__language">
        <Button icon>
          <img
            src={flagEn}
            alt=""
            width={20}
            className="user__info__language__icon"
          />
        </Button>
      </div>
      <div className="user__info__notification">
        <Button icon>
          <IoNotifications size={20} />
        </Button>
      </div>
      <div className="user__info__friends">
        <Button icon>
          <IoPeople size={20} />
        </Button>
      </div>
      <div className="user__info__container">
        <img
          src={user.avatar}
          alt=""
          className="user__info__container__image"
        />
      </div>
    </div>
  );
};

export default UserInfo;
