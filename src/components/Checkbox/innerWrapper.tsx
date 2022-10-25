import styled from "@emotion/styled/macro";
import { css } from '@emotion/react'

interface StyledInnerWrapperProps {
  $hasContainer?: boolean
}

export const StyledInnerWrapper = styled.div<StyledInnerWrapperProps>`
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  border-radius: 15px;

  &:active {
    pointer-events: none;
  }

  ${({ $hasContainer }) =>
    $hasContainer &&
    css`
      min-height: 15px;
    `}
`