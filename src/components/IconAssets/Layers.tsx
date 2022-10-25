import * as React from "react";
import {SVGProps} from "react";

export const Layers = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15493)">
      <path d="M0 0V12H12V0H0ZM15 6V15H6V18H18V6H15ZM21 12V21H12V24H24V12H21Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15493">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
