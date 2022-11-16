import styled, {CSSObject} from "@emotion/styled";
import {colorPalette} from "../../theme";
import {typography} from "../../theme";
import {ButtonOption} from "./Button.component.types";

const base: CSSObject = {
  cursor: "pointer",
  transition: "all .15s ease-in-out",
  "&:focus": {
    outline: "0",
  },
};

type EnumStyles = Record<string, CSSObject>;

export const buttonVariant: EnumStyles = {
  contained: {
    color: colorPalette.Text.White,
    boxShadow: "5px 10px 20px rgba(0,0,0,0.25)",
  },
  outlined: {
    backgroundColor: "transparent",
    borderWidth: "2px",
    borderStyle: "solid",
  },
  text: {
    backgroundColor: "transparent",
    border: "none",
  },
};

const containedBackground: EnumStyles = {
  primary: {
    color: colorPalette.Text.White,
    backgroundColor: colorPalette.DeviDaisy[500],
    "&:active": {
      backgroundColor: "#4C3A80",
    },
  },
  error: {
    color: colorPalette.Text.White,
    backgroundColor: colorPalette.Status.Error,
  },
  positive: {
    color: colorPalette.Text.White,
    backgroundColor: colorPalette.Status.Positive,
  },
};

const buttonColor: EnumStyles = {
  primary: {
    color: colorPalette.DeviDaisy[500],
  },
  error: {
    color: colorPalette.lightBadgeColor.InActive,
  },
  positive: {
    color: colorPalette.lightBadgeColor.Active,
  },
};

const buttonBorder: EnumStyles = {
  primary: {
    color: colorPalette.DeviDaisy[500],
    borderColor: colorPalette.DeviDaisy[500],
  },
  error: {
    color: colorPalette.lightBadgeColor.InActive,
    borderColor: colorPalette.lightBadgeColor.InActive,
  },
  positive: {
    color: colorPalette.lightBadgeColor.Active,
    borderColor: colorPalette.lightBadgeColor.Active,
  },
};

export const buttonHover: EnumStyles = {
  primary: {
    display: "flex",
    color: colorPalette.Text.White,
    backgroundColor: colorPalette.DeviDaisy[500],
    boxShadow: "5px 10px 20px rgba(0,0,0,0.25)",
    "&:hover": {
      boxSizing: "border-box",
      color: colorPalette.DeviDaisy[500],
      backgroundColor: "transparent",
      border: "2px solid #6044B5",
      boxShadow: "(5px 10px 20px rgba(0,0,0,0.25)",
    },
  },
  error: {
    display: "flex",
    color: colorPalette.Text.White,
    backgroundColor: colorPalette.Status.Error,
    boxShadow: "5px 10px 20px rgba(0,0,0,0.25)",
    "&:hover": {
      boxSizing: "border-box",
      color: colorPalette.Status.Error,
      backgroundColor: "transparent",
      border: "2px solid #C12945",
      boxShadow: "(5px 10px 20px rgba(0,0,0,0.25)",
    },
  },
  positive: {
    display: "flex",
    color: colorPalette.Text.White,
    backgroundColor: colorPalette.Status.Positive,
    boxShadow: "5px 10px 20px rgba(0,0,0,0.25)",
    "&:hover": {
      boxSizing: "border-box",
      color: colorPalette.Status.Positive,
      backgroundColor: "transparent",
      border: "2px solid #26962B",
      boxShadow: "(5px 10px 20px rgba(0,0,0,0.25)",
    },
  },
};

const buttonSize: EnumStyles = {
  small: {
    width: "103px",
    height: "35px",
    fontFamily: typography.Quicksand,
    fontWeight: "500",
    fontSize: "14px",
    padding: "5px 19px",
    borderRadius: "4px",
  },
  medium: {
    width: "150px",
    height: "50px",
    fontFamily: typography.Quicksand,
    fontWeight: "600",
    fontSize: "20px",
    padding: "10px 30px 15px 30px",
    borderRadius: "6px",
  },
  large: {
    width: "257px",
    height: "73px",
    fontFamily: typography.Quicksand,
    fontWeight: "600",
    fontSize: "20px",
    padding: "20px 80px",
    borderRadius: "8px",
  },
};

const fullWidth = ({isFullWidth = false}: ButtonOption) =>
  isFullWidth
    ? {
        display: "block",
        width: "100%",
      }
    : null;

const colorStyle = ({color = "primary", variant}: ButtonOption) =>
  variant === "outlined" ? buttonBorder[color] : buttonColor[color];

const variantStyle = ({variant = "text", color = "primary"}: ButtonOption) =>
  variant === "contained"
    ? buttonVariant[variant] && containedBackground[color]
    : buttonVariant[variant];

const sizeStyle = ({size = "medium"}: ButtonOption) => buttonSize[size];

const disabledStyle = ({disabled = false}: ButtonOption) =>
  disabled ? `pointer-events: none; opacity: .5; ` : "";

export const ButtonComponent = styled.button<ButtonOption>(
  base,
  fullWidth,
  disabledStyle,
  sizeStyle,
  colorStyle,
  variantStyle
);
