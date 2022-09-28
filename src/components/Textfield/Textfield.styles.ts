import React, { Children } from 'react';
import styled, { CSSObject } from "@emotion/styled";
import { colorPalette } from '../../theme';
import { typography } from '../../theme';
import { TextfieldOption } from './Textfield.props';


const base: CSSObject = {
    color: "#A3A3A3",
    display: "flex",
    alignItems: "center",
    paddingLeft: "2rem",
    verticalAlign: "middle",
    userSelect: "none",
    border: "2px solid transparent",
    fontSize: "17px",
    gap:"10px",
    fontFamily: "Quicksand",
    letterSpacing: "1px"
    };
    
    type EnumStyles = Record<string, CSSObject>;
    
    const textfieldVariant: EnumStyles = {
    primary: {
      color:colorPalette.Text.TextWhite,
      boxShadow: "5px 10px 20px rgba(0,0,0,0.25)",
      borderRadius: "6px",
      border: "2.5px solid #f2f2f2",
    },
    error: {
      color: colorPalette.Text.TextWhite,
      backgroundColor: "rgba(193,41,69, 0.15)",
      boxShadow: "5px 10px 20px rgba(0,0,0,0.25)",
      borderRadius: "6px",
      border: "2.5px solid #C12945"
    },
    filled: {
      color: colorPalette.Text.TextWhite,
      backgroundColor: "#CFCFCF",
      boxShadow: "5px 10px 20px rgba(0,0,0,0.25)",
      borderRadius: "6px",
      border: "2.5px solid #C5C5C5"
    },
    border: {
      color: colorPalette.Text.TextWhite,
      boxShadow: "5px 10px 20px rgba(0,0,0,0.25)",
      borderRadius: "6px",
      border: "2.5px solid rgba(76,58,128, 0.45)",
    },
    };
    
    const textfieldSize: EnumStyles = {
      small: {
        margin:"auto",
        width:"103px",
        height:"20px",
        fontFamily: typography.Quicksand,
      },
      medium: {
        margin:"auto",
        width:"200px",
        height:"40px",
        fontFamily: typography.Quicksand,
      },
      large: {
        margin:"auto",
        width:"314px",
        height:"50px",
        fontFamily: typography.Quicksand,
        
      },
      };
    
    const textfieldDisabled: EnumStyles = {
     primary: {
      cursor:"not-allowed",
      color:colorPalette.Text.TextWhite,
      backgroundColor: colorPalette.DeviDaisy[500],
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
    
    
    
const TextfieldComponent = styled.input<TextfieldOption>`
    ${base},
    ${(props) => props.size && textfieldSize[props.size]}
    ${(props) => props.disabled ? textfieldDisabled[props.variant]  : textfieldVariant[props.variant]}
`;
    
export default TextfieldComponent;