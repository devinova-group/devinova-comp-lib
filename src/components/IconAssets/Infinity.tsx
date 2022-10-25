import * as React from "react";
import {SVGProps} from "react";

export const Infinity = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M6 6C2.07 6 0 9.03 0 12C0 14.97 2.07 18 6 18C8.37 18 10.26 16.32 12 14.34C13.74 16.32 15.57 18 18 18C21.93 18 24 14.97 24 12C24 9.03 21.93 6 18 6C15.57 6 13.74 7.68 12 9.66C10.26 7.68 8.37 6 6 6ZM6 9C7.26 9 8.64 10.41 10.02 12C8.64 13.59 7.26 15 6 15C3.78 15 3 13.38 3 12C3 10.62 3.78 9 6 9V9ZM18 9C20.22 9 21 10.62 21 12C21 13.38 20.22 15 18 15C16.71 15 15.33 13.59 13.98 12C15.36 10.41 16.71 9 18 9Z" />
  </svg>
);
