import * as React from "react";
import {SVGProps} from "react";

export const Heart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M6 3C6 3 6 3 6 3C4.35 3 2.88 3.69 1.77 4.77C0.69 5.85 0 7.32 0 9C0 10.65 0.69 12.12 1.77 13.23L10.5858 22.0458C11.3668 22.8268 12.6332 22.8268 13.4142 22.0458L22.23 13.23C23.31 12.15 24 10.68 24 9C24 7.35 23.31 5.88 22.23 4.77C21.15 3.69 19.68 3 18 3C16.35 3 14.88 3.69 13.77 4.77C12.69 5.85 12 7.32 12 9C12 7.35 11.31 5.88 10.23 4.77C9.15 3.69 7.68 3 6 3C6 3 6 3 6 3V3Z" />
  </svg>
);
