import { ButtonOption } from "./Button.component.types";
import { ButtonComponent } from "./Button.component.styles";
import React from "react";
import Icon from "../SvgIcons/Icon.component";
import { css } from "@emotion/css";
import { buttonHover} from "./Button.component.styles";



const Button = ({
  variant,
  onClick,
  color,
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
              variant={variant}
              disabled={disabled}
              color={color}
              size={size}
              style={style}
              onClick={onClick}
              isFullWidth={isFullWidth}
              isHover={isHover}
              iconName={iconName}
              className={css({
                [`.icon`]:{
                  fill:color != undefined ? buttonHover[color].color : "white",
                },
                [`&:hover .icon`]: {
                  display: "inline-flex",
                  fill: color != undefined ? buttonHover[color].backgroundColor: "#4C3A80",
                }
              })}   >
        <Icon name={iconName} className="icon" size={size}/>
        {children}
        </ButtonComponent> }
  {   typeof iconName =="string" && !isHover && 
      <ButtonComponent
        variant = {variant}
        color={color}
        disabled={disabled}
        size={size}
        style={style}
        onClick={onClick}
        isFullWidth={isFullWidth}
        isHover={isHover}
        iconName={iconName}
        className={css({
          [`.icon`]:{
            fill:color != undefined ? buttonHover[color].backgroundColor : "white",
          }
        })}
        >
        <Icon name={iconName} className="icon"  size={size}/>
        {children}
        </ButtonComponent> }   
  
  {     typeof iconName !=="string" && 
        <ButtonComponent
        variant = {variant}
        color={color}
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