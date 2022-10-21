import { ButtonOption } from "./Button.component.types";
import { ButtonComponent } from "./Button.component.styles";
import React from "react";
import Icon from "../SvgIcons/Icon.component";
import { css } from "@emotion/css";
import { buttonVariant } from "./Button.component.styles";


const Button = ({
  variant,
  onClick,
  size,
  disabled,
  className,
  style,
  children,
  isFullWidth,
  isHover,
  iconName,
  }:  ButtonOption,
  ) => {
      return(
        <>
  {   typeof iconName =="string" && isHover && 
      <ButtonComponent
        variant = {variant}
        disabled={disabled}
        size={size}
        style={style}
        onClick={onClick}
        isFullWidth={isFullWidth}
        isHover={isHover}
        iconName={iconName}
        className={css({
          [`:hover .icon`]:{
            display:"inline-flex",
            fill: buttonVariant[variant].backgroundColor
           }
        })
        } 
        >
        <Icon name={iconName} className="icon"/>
        {children}
        </ButtonComponent> }
  {   typeof iconName =="string" && !isHover && 
      <ButtonComponent
        variant = {variant}
        disabled={disabled}
        size={size}
        style={style}
        onClick={onClick}
        isFullWidth={isFullWidth}
        isHover={isHover}
        iconName={iconName}
        >
        <Icon name={iconName}  className="icon"/>
        {children}
        </ButtonComponent> }   
  
  {     typeof iconName !=="string" && 
        <ButtonComponent
        variant = {variant}
        disabled={disabled}
        size={size}
        style={style}
        className={className}
        onClick={onClick}
        isFullWidth={isFullWidth}
        isHover={isHover}
        >
        {children}
        </ButtonComponent>}
  
        </>
      )      
      
    };
  
export default Button