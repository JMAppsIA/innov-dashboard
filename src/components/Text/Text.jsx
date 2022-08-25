import React from "react";
import "./text.scss";

const Text = ({
  children,
  h4,
  xSmall,
  small,
  medium,
  large,
  xLarge,
  black,
  blackItalic,
  bold,
  boldItalic,
  heavy,
  heavyItalic,
  light,
  lightItalic,
  mediumFont,
  mediumItalic,
  regular,
  regularItalic,
  semi,
  semiItalic,
  thin,
  thinItalic,
  extraLight,
  extraLightItalic,
  uppercase,
  color,
  size,
  align,
  title,
  body1,
  body2,
  style
}) => {
  const className = {
    xSmall: xSmall && 'xSmall',
    small: small && 'small',
    medium: medium && 'medium',
    large: large && 'large',
    xLarge: xLarge && 'xLarge',
    black: black && "black",
    blackItalic: blackItalic && "blackItalic",
    bold: bold && "bold",
    boldItalic: boldItalic && "boldItalic",
    heavy: heavy && "heavy",
    heavyItalic: heavyItalic && "heavyItalic",
    light: light && "light",
    lightItalic: lightItalic && "lightItalic",
    mediumFont: mediumFont && "medium",
    mediumItalic: mediumItalic && "mediumItalic",
    regular: regular && "regular",
    regularItalic: regularItalic && "regularItalic",
    semi: semi && "semi",
    semiItalic: semiItalic && "semiItalic",
    thin: thin && "thin",
    thinItalic: thinItalic && "thinItalic",
    extraLight: extraLight && "extraLight",
    extraLightItalic: extraLightItalic && "extraLightItalic",
    uppercase: uppercase && "uppercase",
    title: title && "title",
    h4: h4 && "h4",
    body1: body1 && "body1",
    body2: body2 && "body2"
  };
  return (
    <span
      className={Object.values(className).join(" ")}
      style={{
        color: color || `none`,
        textAlign: align || `left`,
        ...style
      }}
    >
      {children}
    </span>
  );
};

export default Text;
