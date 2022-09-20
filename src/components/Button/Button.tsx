import React from "react";
import { css, cx } from "@emotion/css";

const color = "white";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: ${color};
        }
      `}
    >
      {props.label}
    </button>
  );
};

export default Button;
