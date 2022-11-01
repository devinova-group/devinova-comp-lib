import styled from "@emotion/styled";
import {DialogStyleProps} from "./Dialog.props";

export const InnerDialog = styled.div<DialogStyleProps>`
  box-sizing: border-box;
  min-height: 280px;
  width: 350px;
  border-radius: 12px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
