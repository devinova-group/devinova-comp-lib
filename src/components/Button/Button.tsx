import React, { Children } from 'react';
import styled, { CSSObject } from "@emotion/styled";
import { palette } from '../../theme';
import { typography } from '../../theme';

interface ButtonOption {
  text?: string;
  icon?: string;
  onClick?: () => void;
  variant: 'primary' | 'error' | 'positive' | '';
  size?: "small" | "medium" | "large" | '';
  href?: string;
  disabled?: boolean;
  isFullWidth?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children: React.PropsWithChildren
}

const base: CSSObject = {
color:palette.Text.TextWhite,
cursor: "pointer",
display: "flex",
fontWeight: "600",
alignItems: "center",
justifyContent: "center",
verticalAlign: "middle",
userSelect: "none",
border: "2px solid transparent",
fontSize: "20px",
gap:"10px",
transition: "all .15s ease-in-out",
"&:focus": {
  outline: "0",
},
};

type EnumStyles = Record<string, CSSObject>;

const buttonVariant: EnumStyles = {
primary: {
  color:palette.Text.TextWhite,
  backgroundColor: palette.DeviDaisy[500],
  boxShadow: "5px 10px 20px rgba(0,0,0,0.25)",
  borderRadius: "4px",
  ":hover":{
    boxSizing:"border-box",
    color:palette.DeviDaisy[500],
    backgroundColor: "transparent",
    border: "2px solid #6044B5",
    boxShadow: "(5px 10px 20px rgba(0,0,0,0.25)",
    borderRadius: "4px",
  },
},
error: {
  color: palette.Text.TextWhite,
  backgroundColor: palette.Status.Error,
  boxShadow: "5px 10px 20px rgba(0,0,0,0.25)",
  borderRadius: "4px",
  ":hover":{
    boxSizing:"border-box",
    color:palette.Status.Error,
    backgroundColor: "transparent",
    border: "2px solid #C12945",
    boxShadow: "(5px 10px 20px rgba(0,0,0,0.25)",
    borderRadius: "4px",
  },
},
positive: {
  color: palette.Text.TextWhite,
  backgroundColor: palette.Status.Positive,
  boxShadow: "5px 10px 20px rgba(0,0,0,0.25)",
  borderRadius: "4px",
  ":hover":{
    boxSizing:"border-box",
    color:palette.Status.Positive,
    backgroundColor: "transparent",
    border: "2px solid #26962B",
    boxShadow: "(5px 10px 20px rgba(0,0,0,0.25)",
    borderRadius: "4px",
  },
},
};

const buttonSize: EnumStyles = {
small: {
  margin:"auto",
  width:"103px",
  height:"35px",
  fontFamily: typography.Quicksand,
  fontWeight:'500',
  fontSize: "14px",
  padding: "20px 35px"
},
medium: {
  margin:"auto",
  width:"150px",
  height:"50px",
  fontFamily: typography.Quicksand,
  fontWeight:'600',
  fontSize: "20px",
  padding: "20px 45px",
},
large: {
  margin:"auto",
  width:"257px",
  height:"73px",
  fontFamily: typography.Quicksand,
  fontWeight:'600',
  fontSize: "20px",
  padding: "20px 80px",
},
};

const buttonDisabled: EnumStyles = {
 primary: {
  cursor:"not-allowed",
  color:palette.Text.TextWhite,
  backgroundColor: palette.DeviDaisy[500],
},
error: {
  cursor:"not-allowed",
  color: "white",
  backgroundColor: "red",
}, 
positive: {
  cursor: "not-allowed",
  backgroundColor: "grey",
  color: "#f5f5f5",
  boxShadow: "5px 10px 20px rgba(0,0,0,0.25)",
  borderRadius: "4px",
},
};

const fullWidth = ({ isFullWidth = false }: ButtonOption) =>
isFullWidth
  ? {
      display: "block",
      width: "100%",
    }
  : null;


const Button = styled.button<ButtonOption>`
    ${base},
    ${(props) => props.size && buttonSize[props.size]}
    ${(props) => props.disabled ? buttonDisabled[props.variant]  : buttonVariant[props.variant]}
    ${fullWidth}
`;

export default Button 