import styled from "@emotion/styled";
import { css, CSSObject, keyframes } from "@emotion/react";
import { toastDurationProps } from "./Toast.props";
import { colorPalette } from "../../theme";

const duration = keyframes`
    from{
        width: 100%
    }

    to{
        width: 0%
    }
`;

export const ToastDuration = styled.div<toastDurationProps>`
  height: 5px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${colorPalette.LightMode.Secondary};
  animation-name: ${duration};
  animation-duration: ${(props) =>
    props.autoCloseTime ? props.autoCloseTime / 1000 : 1}s;
  animation-timing-function: linear;
  border-radius: 5px;
`;
