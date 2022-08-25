import React from "react";
import "./checkbox.scss";

const Checkbox = ({ label }) => {
  return (
    <label className="checkbox__container">
      <input type="checkbox" name="checkbox" />
      {label}
    </label>
  );
};

export default Checkbox;
