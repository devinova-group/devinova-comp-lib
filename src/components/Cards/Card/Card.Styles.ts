import styled from "@emotion/styled";
import { colorPalette } from "../../../theme";
import { CardProps } from "../Card.props";

export const Card = styled.div<CardProps>`
  box-sizing: border-box;
  position: relative;
  min-height: 280px;
  width: 350px;
  background-color: ${(props) =>
    props.dark
      ? colorPalette.Background.CardDark
      : colorPalette.Background.CardLight};
  color: ${(props) =>
    props.dark ? colorPalette.Text.White : colorPalette.Text.Black};
  box-shadow: ${(props) =>
    props.raised ? "4px 4px 21px rgba(0, 0, 0, 0.25)" : "none"};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;
