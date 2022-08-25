import React from "react";
import Text from "../Text/Text";
import "./input.scss";

const Input = ({ translation, id, name, type, label, validation, register }) => {
  return (
    <>
      <div className="input-container">
        <input
          {...{ id }}
          {...{ type }}
          {...{ name }}
          className={`input form-control`}
          autoComplete={`off`}
          placeholder={` `}
          {...register}
          style={{
            borderColor: validation[name]?.type === 'required' && `#FF4842`
          }}
        />
        <label htmlFor={id} className="input-label" style={{color: validation[name]?.type === 'required' && `#FF4842`}}>
          {label}
        </label>
      </div>
      <div className="row">
        <div className="col-12 col-md-12">
          {validation[name]?.type === 'required' && <Text style={{color: '#FF4842'}}>{translation("inputRequired")}</Text>}
        </div>
      </div>
    </>
  );
};

export default Input;
