import { ButtonOption } from "./Button.component.types";
import { ButtonComponent } from "./Button.component.styles";
import React from "react";
import Icon from "../SvgIcons/SvgIcon";
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
  hasIcon,
  iconName,
  }:  ButtonOption,
  ) => {
      return(
        <>
  {   hasIcon && isHover && 
      <ButtonComponent
        variant = {variant}
        disabled={disabled}
        size={size}
        style={style}
        onClick={onClick}
        isFullWidth={isFullWidth}
        isHover={isHover}
        hasIcon={hasIcon}
        iconName={iconName}
        className={css({
          [`:hover .icon`]:{
            display:"inline-flex",
            fill: buttonVariant[variant].backgroundColor
           }
        })
        } 
        >
        <Icon className="icon" color="white" iconName={iconName}/>
        {children}
        </ButtonComponent> }
  {   hasIcon && !isHover && 
      <ButtonComponent
        variant = {variant}
        disabled={disabled}
        size={size}
        style={style}
        onClick={onClick}
        isFullWidth={isFullWidth}
        isHover={isHover}
        hasIcon={hasIcon}
        iconName={iconName}
        >
        <Icon className="icon" color="white" iconName={iconName}/>
        {children}
        </ButtonComponent> }   
  
  {     !hasIcon && 
        <ButtonComponent
        variant = {variant}
        disabled={disabled}
        size={size}
        style={style}
        className={className}
        onClick={onClick}
        hasIcon={hasIcon}
        isFullWidth={isFullWidth}
        isHover={isHover}
        >
        {children}
        </ButtonComponent>}
  
        </>
      )      
      
    };
  
export default Button