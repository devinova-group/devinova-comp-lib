import styled from "@emotion/styled";
import {CollapseProps} from "../Card.props";

export const CollapseDiv = styled.div<CollapseProps>`
  box-sizing: border-box;
  padding-right: 2rem;
  position: relative;
  height: fit-content;
  width: ${(props) => props.width}px;
`;
