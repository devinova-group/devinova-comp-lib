import React from 'react';
import styled, { CSSObject } from "@emotion/styled";
import { palette } from './theme';
import { typography } from './theme';
/* type type = 'primary' | 'error' | 'positive'; */
export interface ButtonOption {
    text?: string;
    icon?: string;
    onClick?: () => void;
    variant?: 'primary' | 'error' | 'positive';
    size?: "small" | "medium" | "large";
    href?: string;
    disabled?: boolean;
    defalutCls?: string;
    isFullWidth?: boolean;
    className?: string;
}

const base: CSSObject = {
  cursor: "pointer",
  display: "inline-block",
  fontWeight: "normal",
  textAlign: "center",
  verticalAlign: "middle",
  userSelect: "none",
  border: "1px solid transparent",
  padding: ".4rem .75rem",
  fontSize: "1rem",
  lineHeight: 1.5,
  borderRadius: "4px",
  transition: "all .15s ease-in-out",
  "&:focus": {
    outline: "0",
  },
  "&:disabled": {
    cursor: "inherit",
  },
  
};

type EnumStyles = Record<string, CSSObject>;

const buttonVariant: EnumStyles = {
  primary: {
    color:palette.DeviDaisy[100],
    backgroundColor: palette.DeviDaisy[500],
  },
  error: {
    color: "white",
    backgroundColor: "red",
  },
  positive: {
    color: "white",
    backgroundColor: "green",
  },
};

const buttonSize: EnumStyles = {
  small: {
    fontSize: ".75rem",
    padding: ".2rem .75rem",
  },
  medium: {
    fontSize: "1rem",
    padding: ".4rem 1rem",
  },
  large: {
    fontSize: "1.25rem",
    padding: ".6rem 1.25rem",
  },
};

const color = ({variant}: ButtonOption)=> {
 if(variant = "primary"){
  return buttonVariant[variant]}
  else if(variant = "error"){
    return buttonVariant[variant]}
}
  ;

const size = ({ size = "large" }: ButtonOption) => buttonSize[size];
const fullWidth = ({ isFullWidth = false }: ButtonOption) =>
  isFullWidth
    ? {
        display: "block",
        width: "100%",
      }
    : null;



    
  const Button = styled.button<ButtonOption>(
      base,
      color, 
      size,
      fullWidth
  );

export default Button 
/* import React from "react";
import { css, cx } from "@emotion/css";

const color = "white";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: ${color};
        }
      `}
    >
      {props.label}
    </button>
  );
};

export default Button;
 */