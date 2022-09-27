import { ButtonOption } from "./Button.component.types";
import { ButtonComponent } from "./Button.component.styles";
import React from "react";


const Button = ({
variant,
onClick,
size,
disabled,
className,
style,
children,
isFullWidth,
}:  ButtonOption ) => {

  return(
<ButtonComponent
variant = {variant}
disabled={disabled}
size={size}
style={style}
className={className}
onClick={onClick}
isFullWidth={isFullWidth}
>
{children}
</ButtonComponent>
  );
}

export default Button