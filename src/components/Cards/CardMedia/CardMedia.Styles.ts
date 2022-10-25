import styled, {CSSObject} from "@emotion/styled";
import {CardMediaProps} from "../Card.props";

type enumStyles = Record<string, CSSObject>;

export const StyledCardMedia = styled.img<CardMediaProps>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
`;
