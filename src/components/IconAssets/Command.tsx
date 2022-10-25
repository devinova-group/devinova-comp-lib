import * as React from "react";
import {SVGProps} from "react";

export const Command = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M6.5 2C4.01 2 2 4.01 2 6.5C2 8.99 4.01 11 6.5 11H8V14H6.5C4.01 14 2 16.01 2 18.5C2 20.99 4.01 23 6.5 23C8.99 23 11 20.99 11 18.5V17H14V18.5C14 20.99 16.01 23 18.5 23C20.99 23 23 20.99 23 18.5C23 16.01 20.99 14 18.5 14H17V11H18.5C20.99 11 23 8.99 23 6.5C23 4.01 20.99 2 18.5 2C16.01 2 14 4.01 14 6.5V8H11V6.5C11 4.01 8.99 2 6.5 2ZM6.5 5C7.34 5 8 5.66 8 6.5V8H6.5C5.66 8 5 7.34 5 6.5C5 5.66 5.66 5 6.5 5ZM18.5 5C19.34 5 20 5.66 20 6.5C20 7.34 19.34 8 18.5 8H17V6.5C17 5.66 17.66 5 18.5 5ZM11 11H14V14H11V11ZM6.5 17H8V18.5C8 19.34 7.34 20 6.5 20C5.66 20 5 19.34 5 18.5C5 17.66 5.66 17 6.5 17ZM17 17H18.5C19.34 17 20 17.66 20 18.5C20 19.34 19.34 20 18.5 20C17.66 20 17 19.34 17 18.5V17Z" />
  </svg>
);
