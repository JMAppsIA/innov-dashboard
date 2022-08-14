import React from "react";
import "./button.scss";

const Button = ({
  children,
  icon,
  xs,
  sm,
  md,
  l,
  xl,
  radius,
  width,
  height,
  bgColor,
  hasHover,
  hoverColor,
  hoverTextColor,
  primary,
  secondary,
  success,
  warning,
  danger,
  info,
  social,
  transparent,
  borderColor,
  textColor,
  hasReflection,
  onClick,
}) => {
  const className = {
    xs: xs && "xs",
    sm: sm && "sm",
    md: md && "md",
    l: l && "l",
    xl: xl && "xl",
    radius: radius && "radius",
    hasHover: hasHover && "hasHover",
    hoverColor: hoverColor && "hoverColor",
    hoverTextColor: hoverTextColor && "hoverTextColor",
    primary: primary && "btn-primary",
    secondary: secondary && "btn-secondary",
    success: success && "success",
    warning: warning && "warning",
    danger: danger && "danger",
    info: info && "info",
    social: social && "social",
    transparent: transparent && "transparent",
    borderColor: borderColor && "borderColor",
    textColor: textColor && "textColor",
    icon: icon && "icon",
  };
  return (
    <button
      className={`btn ${Object.values(className).join(" ")}`}
      onClick={onClick}
      style={{
        width: width,
        height: height,
      }}
    >
      {icon && 
        <span className="icon-container">
          <span className="icon-wrapper">{children}</span>
        </span>
      }
      {!icon && children}
      {hasReflection && <span className="btn-reflection"></span>}
    </button>
  );
};

export default Button;
