import {TextfieldOption, variantMapping} from "./Textfield.props";
import TextfieldComponent from "./Textfield.styles";
import React from "react";

export const Textfield: React.FC<TextfieldOption> = ({
  variant,
  as,
  inputSize,
  disabled,
  className,
  style,
  type,
}) => {
  let Tag;
  if (!as && variantMapping[variant as keyof typeof variantMapping]) {
    let element = variantMapping[variant as keyof typeof variantMapping];
    Tag = element;
  } else {
    Tag = as ? as : "";
  }

  return (
    <TextfieldComponent
      as={Tag}
      variant={variant}
      disabled={disabled}
      inputSize={inputSize}
      style={style}
      className={className}
      type={type}
      placeholder="Placeholder text"
    ></TextfieldComponent>
  );
};
