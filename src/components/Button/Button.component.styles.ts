import styled, { CSSObject } from "@emotion/styled";
import { colorPalette} from '../../theme';
import { typography } from '../../theme';
import { ButtonOption } from "./Button.component.types";

const base: CSSObject = {
  color:colorPalette.Text.White,
  cursor: "pointer",
  display: "flex",
  fontWeight: "600",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  userSelect: "none",
  border: "2px solid transparent",
  fontSize: "20px",
  transition: "all .15s ease-in-out",
  "&:focus": {
    outline: "0",
  },
};

type EnumStyles = Record<string, CSSObject>;

export const buttonVariant: EnumStyles = {
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
    
  },
};

const buttonHover: EnumStyles ={
primary:{
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
    padding: "15px 30px",
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
    cursor:"not-allowed",
    color:colorPalette.Text.White,
    backgroundColor: colorPalette.DeviDaisy[500],
    background: "rgba(96, 68, 181, 0.35)",
    boxShadow: "5px 10px 20px rgba(0, 0, 0, 0.25)",
    borderRadius: "8px",
  },
  error: {
    cursor:"not-allowed",
    color:colorPalette.Text.White,
    backgroundColor: colorPalette.Status.Error,
    background: "rgba(193, 41, 69, 0.55)",
    boxShadow: "5px 10px 20px rgba(0, 0, 0, 0.25)",
    borderRadius: "8px",
  }, 
  positive: {
    cursor:"not-allowed",
    color:colorPalette.Text.White,
    backgroundColor: colorPalette.Status.Positive,
    background: "rgba(38, 150, 43, 0.5)",
    boxShadow: "5px 10px 20px rgba(0, 0, 0, 0.25)",
    borderRadius: "8px",
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
      ${base},
      ${(props) => props.size && buttonSize[props.size]}
      ${(props) => props.disabled ? buttonDisabled[props.variant]  : buttonVariant[props.variant]}
      ${fullWidth}
      ${(props) => props.isHover && buttonHover[props.variant]}
  `;

