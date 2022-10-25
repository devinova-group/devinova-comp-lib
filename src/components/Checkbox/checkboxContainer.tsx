import styled from "@emotion/styled/macro";
import { colorPalette } from '../../theme';
import { typography } from "../../theme";
import { CheckmarkWrapperProps } from "./checkbox.props";



  export const CheckboxContainer = styled.div<CheckmarkWrapperProps>`
  display: block;
  position: absolute;
  top: ${({ $hasContainer }) => ($hasContainer ? '0.1px' : '4px')};
  left: ${({ $hasContainer }) => ($hasContainer ? '0.1px' : '4px')};
  height: 18px;
  width: 18px;
  `;