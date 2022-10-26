import styled, {CSSObject} from "@emotion/styled";
import {typography} from "../../theme";
import {TextfieldOption} from "./Textfield.props";

const base: CSSObject = {
  display: "flex",
  alignItems: "center",
  paddingLeft: "2rem",
  verticalAlign: "middle",
  userSelect: "none",
  border: "2px solid transparent",
  fontSize: "17px",
  gap: "10px",
  fontFamily: "Quicksand",
  letterSpacing: "1px",
};

type EnumStyles = Record<string, CSSObject>;

const textfieldVariant: EnumStyles = {
  primary: {
    outline: "none",
    boxShadow: "5px 10px 20px rgba(0,0,0,0.25)",
    borderRadius: "6px",
    border: "2px solid #f2f2f2",
  },
  error: {
    outline: "none",
    backgroundColor: "rgba(193,41,69, 0.15)",
    boxShadow: "5px 10px 20px rgba(0,0,0,0.25)",
    borderRadius: "6px",
    border: "2px solid #C12945",
  },

  border: {
    outline: "none",
    boxShadow: "5px 10px 20px rgba(0,0,0,0.25)",
    borderRadius: "6px",
    border: "2px solid rgba(76,58,128, 0.45)",
  },
  textarea: {
    outline: "none",
    paddingTop: "20px",
    paddingLeft: "50px",
    boxShadow: "5px 10px 20px rgba(0,0,0,0.25)",
    borderRadius: "6px",
    border: "2px solid #f2f2f2",
  },
};

const textfieldSize: EnumStyles = {
  small: {
    margin: "auto",
    fontSize: "10px",
    width: "150px",
    height: "30px",
    fontFamily: typography.Quicksand,
  },
  medium: {
    margin: "auto",
    fontSize: "14px",
    width: "200px",
    height: "40px",
    fontFamily: typography.Quicksand,
  },
  large: {
    margin: "auto",
    width: "314px",
    height: "50px",
    fontFamily: typography.Quicksand,
  },
};

const textfieldDisabled: EnumStyles = {
  primary: {
    color: "#A3A3A3",
    cursor: "not-allowed",
    outline: "none",
    boxShadow: "5px 10px 20px rgba(0,0,0,0.25)",
    borderRadius: "6px",
    border: "2px solid #C5C5C5",
    backgroundColor: "rgb(207,207,207, 0.8)",
  },
};

const TextfieldComponent = styled.input<TextfieldOption>`
  ${base},
  ${(props) => props.inputSize && textfieldSize[props.inputSize]}
    ${(props) =>
    props.disabled
      ? textfieldDisabled[props.variant]
      : textfieldVariant[props.variant]}
`;

export default TextfieldComponent;
