import styled from "@emotion/styled/macro";
import { css } from '@emotion/react'

interface StyledLabelProps {
  $hasContainer?: boolean
  $hasDescription?: boolean
  $isDisabled: boolean
}

export const StyledLabel = styled.label<StyledLabelProps>`
  color: ${({ $hasContainer, $isDisabled }) =>
     $isDisabled && !$hasContainer ? 'red' : 'red'};
  
  pointer-events: none;
  padding: 4px;

  ${({ $hasContainer }) =>
    $hasContainer &&
    css`
      padding: 0 12px 0 0;
    `}

  ${({ $hasDescription }) =>
    $hasDescription &&
    css`
      padding: 12px 12px 12px 0;
    `}
`