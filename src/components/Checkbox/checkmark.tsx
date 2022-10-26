import styled from "@emotion/styled/macro";
import {CheckboxRootProps, CheckmarkProps} from "./checkbox.props";
import {StyledCheckbox} from "./styledCheckbox";
import {css} from "@emotion/react";

function getCheckboxActiveStyle() {
  return css`
    &::before {
      box-shadow: 0 0 0 2px transparent;
    }
  `;
}

export const StyledCheckmark = styled.span<CheckmarkProps>`
  display: block;
  position: relative;
  height: 100%;
  width: 100%;
  background-color: white;
  border: 1px solid white;
  

  &::before {
    content: '';
   
    border-radius: 2px;
  }

  &::after {
    content: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIiAvPgogICAgPHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMywgNCkiIGQ9Ik04LjgyMiAwYzEuMDUtLjAyNyAxLjU3NCAxLjMwNC44MjcgMi4wOEw0LjI5OCA3Ljc0YS44My44MyAwIDAgMS0xLjIwNyAwTC4zNzYgNC44NTVDLS43NTIgMy43MTguOTE0IDEuOTU2IDEuOTkgMy4xNDlsMS41MDggMS41OTVjLjEwNS4xMS4yODguMTEuNDA3IDBsNC4xMy00LjM3QTEuMSAxLjEgMCAwIDEgOC44MjMgMHoiCiAgICAgICAgICBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==);
    display: none;
  }

  ${({$hasContainer}) => {
    if ($hasContainer) {
      return css`
        ${StyledCheckbox}:hover &, ${StyledCheckbox}:active & {
          ${getCheckboxActiveStyle()}
        }
      `;
    }

    return css`
      ${StyledCheckbox}:hover &, ${StyledCheckbox}:active &, ${StyledCheckbox}:focus-within & {
        ${getCheckboxActiveStyle()}
      }
    `;
  }}

  ${StyledCheckbox} input:checked ~ & {
    background-color: #4C3A80;
    border: 1px solid #4C3A80;
    text-align: top;

    &::after {
      display: block;
     
    }
  }

  ${StyledCheckbox} input:disabled ~ && {
    background-color: transparent;
    border-color: ${({$hasContainer}) =>
      $hasContainer ? "transparent" : "transparent"};

    &::before {
      box-shadow: none;
    }
  }

  ${StyledCheckbox} input:disabled:checked ~ && {
    background-color: ${({$hasContainer}) =>
      $hasContainer ? "#AAAAAA" : "red"}
`;
