import styled from "@emotion/styled";
import { StyledTextProps } from "./typography.component.props";
import { colorPalette, typography } from "../../theme";

export const Typography = styled.h1<StyledTextProps>`
  color: ${colorPalette.Text.TextBlack};
  font-family: ${typography.Neucha};
`;
