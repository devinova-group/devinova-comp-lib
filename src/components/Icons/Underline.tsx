import * as React from "react";
import {SVGProps} from "react";

export const Underline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M6 0C5.44772 0 5 0.447715 5 1V12C5 15.3 8.36 18 12.5 18H14C17.3 18 20 15.3 20 12V1C20 0.447715 19.5523 0 19 0H18C17.4477 0 17 0.447715 17 1V12C17 13.65 15.65 15 14 15C12.35 15 11 13.65 11 12V1C11 0.447715 10.5523 0 10 0H6ZM3 21C2.44772 21 2 21.4477 2 22V23C2 23.5523 2.44772 24 3 24H22C22.5523 24 23 23.5523 23 23V22C23 21.4477 22.5523 21 22 21H3Z" />
  </svg>
);
