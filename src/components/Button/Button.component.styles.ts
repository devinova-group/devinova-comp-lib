import styled, { CSSObject } from "@emotion/styled";
import { colorPalette} from '../../theme';
import { typography } from '../../theme';
import { ButtonOption } from "./Button.component.types";

const base: CSSObject = {
  cursor: "pointer",
  transition: "all .15s ease-in-out",
  "&:focus": {
    outline: "0",
  },
};

type EnumStyles = Record<string, CSSObject>;

export const buttonVariantColor: EnumStyles = {
contained: 
{  
  primary: {
    color:colorPalette.Text.White,
    backgroundColor: colorPalette.DeviDaisy[500],
    boxShadow: "5px 10px 20px rgba(0,0,0,0.25)",
    "&:active": {
      backgroundColor: "#4C3A80",
    },
  },
  error: {
    color: colorPalette.Text.White,
    backgroundColor: colorPalette.Status.Error,
    boxShadow: "5px 10px 20px rgba(0,0,0,0.25)",
  },
  positive: {
    color: colorPalette.Text.White,
    backgroundColor: colorPalette.Status.Positive,
    boxShadow: "5px 10px 20px rgba(0,0,0,0.25)",
  }
},
  outlined: 
  {  
    primary: {
    color:colorPalette.DeviDaisy[500],
    backgroundColor: 'transparent',
    border: `2px solid ${colorPalette.DeviDaisy[500]}`,
    "&:active": {
      border: "2px solid #4C3A80",
    },
  },
  error: {
    color: colorPalette.lightBadgeColor.InActive,
    backgroundColor: 'transparent',
    border: `2px solid ${colorPalette.lightBadgeColor.InActive}`,
  },
  positive: {
    color: colorPalette.lightBadgeColor.Active,
    backgroundColor: 'transparent',
    border: `2px solid ${colorPalette.lightBadgeColor.Active}`,
  }},
  text:{  
    primary: {
    color:colorPalette.DeviDaisy[500],
    backgroundColor: 'transparent',
  },
  error: {
    color: colorPalette.Status.Error,
    backgroundColor: 'transparent',
  },
  positive: {
    color:colorPalette.Status.Positive,
    backgroundColor: 'transparent',
  }
}
};


export const buttonHover: EnumStyles ={
primary:{
  display:"flex",
  color:colorPalette.Text.White,
  backgroundColor: colorPalette.DeviDaisy[500],
  boxShadow: "5px 10px 20px rgba(0,0,0,0.25)",
  "&:hover":{
    boxSizing:"border-box",
    color:colorPalette.DeviDaisy[500],
    backgroundColor: "transparent",
    border: "2px solid #6044B5",
    boxShadow: "(5px 10px 20px rgba(0,0,0,0.25)",
  },
},
error:{
  display:"flex",
  color: colorPalette.Text.White,
    backgroundColor: colorPalette.Status.Error,
    boxShadow: "5px 10px 20px rgba(0,0,0,0.25)",
  "&:hover":{
    boxSizing:"border-box",
    color:colorPalette.Status.Error,
    backgroundColor: "transparent",
    border: "2px solid #C12945",
    boxShadow: "(5px 10px 20px rgba(0,0,0,0.25)",

  },
},
positive:{
  display:"flex",
  color: colorPalette.Text.White,
  backgroundColor: colorPalette.Status.Positive,
  boxShadow: "5px 10px 20px rgba(0,0,0,0.25)",
  "&:hover":{
    boxSizing:"border-box",
    color:colorPalette.Status.Positive,
    backgroundColor: "transparent",
    border: "2px solid #26962B",
    boxShadow: "(5px 10px 20px rgba(0,0,0,0.25)",
  },
}

}

const buttonSize: EnumStyles = {
  small: {
    width:"103px",
    height:"35px",
    fontFamily: typography.Quicksand,
    fontWeight:'500',
    fontSize: "14px",
    padding: "5px 19px",
    gap:"6px",
    borderRadius: "4px",
  },
  medium: {
    width:"150px",
    height:"50px",
    fontFamily: typography.Quicksand,
    fontWeight:'600',
    fontSize: "20px",
    padding: "10px 30px 15px 30px",
    gap:"8px",
    borderRadius: "6px",
  },
  large: {
    width:"257px",
    height:"73px",
    fontFamily: typography.Quicksand,
    fontWeight:'600',
    fontSize: "20px",
    gap:"10px",
    padding: "20px 80px",
    borderRadius: "8px",
  },
};

const buttonDisabled: EnumStyles = {
   primary: {
    borderRadius: "8px",
    cursor:"not-allowed",
    color:colorPalette.Text.White,
    background: "rgba(96, 68, 181, 0.35)",
    boxShadow: "5px 10px 20px rgba(0, 0, 0, 0.25)",
    ":active":{background: "rgba(96, 68, 181, 0.35)"},
  },
  error: {
    borderRadius: "8px",
    cursor:"not-allowed",
    color:colorPalette.Text.White,
    background: "rgba(193, 41, 69, 0.55)",
    boxShadow: "5px 10px 20px rgba(0, 0, 0, 0.25)",
  }, 
  positive: {
    borderRadius: "8px",
    cursor:"not-allowed",
    color:colorPalette.Text.White,
    background: "rgba(38, 150, 43, 0.5)",
    boxShadow: "5px 10px 20px rgba(0, 0, 0, 0.25)",
    
  },
};




const fullWidth = ({ isFullWidth = false }: ButtonOption) =>
  isFullWidth
    ? {
        display: "block",
        width: "100%",
      }
    : null;

  
export const ButtonComponent = styled.button<ButtonOption>`
      ${(props) => props.variant && props.color ? buttonVariantColor[props.variant][props.color] : props.color ? buttonVariantColor["contained"][props.color]: props.variant ? buttonVariantColor[props.variant]["primary"]: buttonVariantColor["contained"]["primary"]},
      ${(props) => props.size ? buttonSize[props.size] : buttonSize["medium"]},
      ${(props) => props.disabled === true && props.color ? buttonDisabled[props.color]  : ""},
      ${fullWidth}
      ${(props) => props.isHover && props.color && buttonHover[props.color]}
      ${base}
  `;
