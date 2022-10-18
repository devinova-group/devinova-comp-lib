import styled, { CSSObject } from "@emotion/styled";
import { cardProps } from "../Card.props";

type enumStyles = Record<string, CSSObject>;

const baseStyling: CSSObject = {
  boxSizing: "border-box",
  position: "relative",
  height: 50,
  width: 400,
  borderRadius: 2,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  "&:hover": { transform: "scale(.95)" },
};

export const StyledToast = styled.div<cardProps>(baseStyling);
