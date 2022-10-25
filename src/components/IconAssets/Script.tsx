import * as React from "react";
import {SVGProps} from "react";

export const Script = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15337)">
      <path d="M9 0C7.35 0 6 1.35 6 3V19.5C6 20.34 5.34 21 4.5 21C3.66 21 3 20.34 3 19.5V16.5C3 15.6716 2.32843 15 1.5 15V15C0.671573 15 0 15.6716 0 16.5V21C0 22.65 1.35 24 3 24H18C19.65 24 21 22.65 21 21V14C21 12.8954 20.1046 12 19 12H11C9.89543 12 9 11.1046 9 10V4.5C9 3.66 9.66 3 10.5 3C11.34 3 12 3.66 12 4.5V7C12 8.10457 12.8954 9 14 9H22C23.1046 9 24 8.10457 24 7V3C24 1.35 22.65 0 21 0H9Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15337">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
