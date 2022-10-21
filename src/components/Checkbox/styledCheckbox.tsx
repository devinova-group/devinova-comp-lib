import styled from "@emotion/styled/macro";
import { CheckboxRootProps } from "./checkbox.props";
import { css } from '@emotion/react'



  export const StyledCheckbox = styled.div<CheckboxRootProps>`
  display: inline-flex;
  position: relative;
  box-shadow: 5px 10px 20px rgba(0,0,0,0.2);
  padding: ${({ $hasContainer }) =>
    $hasContainer ? `0 4px 4.5px 4.5px` : `0 0 0 20px`};
  font-size: 5px;
  user-select: none;
  
  cursor: pointer;
  * {
    cursor: pointer;
  }
  
  ${({ $isInvalid }) =>
    $isInvalid &&
    css`
      border-color: #4C3A80;
      box-shadow: 0 0 0 2px #4C3A80;
    `}

  ${({ $hasContainer, $isChecked }) =>
    $hasContainer &&
    $isChecked &&
    css`
      background-color: #4C3A80;
    `}

  ${({ $hasContainer }) =>
    $hasContainer &&
    css`
      border: 3px solid rgba(76,58,128, 0.5);
      border-radius: 2px;
      &:focus-within,
     
    `}

  ${({ $isDisabled, $hasContainer }) =>
    $isDisabled &&
    css`
      cursor: not-allowed;

      * {
        cursor: not-allowed;
      }

      border-color: #C5C5C5;

      ${$hasContainer &&
      css`
        background-color: #AAAAAA;
      `}

      
      
    `}
`