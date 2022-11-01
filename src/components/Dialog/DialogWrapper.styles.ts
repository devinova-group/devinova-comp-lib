import styled from "@emotion/styled";
import {DialogStyleProps} from "./Dialog.props";

export const DialogWrapper = styled.div<DialogStyleProps>`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  display: ${(props) => (props.open ? "grid" : "none")};
  background-color: rgba(0, 0, 0, 0.3);
`;
