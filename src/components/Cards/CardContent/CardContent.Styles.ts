import styled, { CSSObject } from "@emotion/styled";
import { cardContentProps } from "../Card.props";

type enumStyles = Record<string, CSSObject>;

const baseStyling: CSSObject = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
};

export const CardContent = styled.div<cardContentProps>(baseStyling);
