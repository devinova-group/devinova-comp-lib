import { TextfieldOption } from "./Textfield.props"
import TextfieldComponent from "./Textfield.styles"
import React from "react";

const Textfield = ({
  variant,
  size,
  disabled,
  className,
  style,
  }:  TextfieldOption ) => {
  
    return(
  <TextfieldComponent
  variant = {variant}
  disabled={disabled}
  size={size}
  style={style}
  className={className}
  >
  </TextfieldComponent>
    );
  }
  
  export default Textfield;