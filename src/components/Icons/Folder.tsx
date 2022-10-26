import * as React from "react";
import {SVGProps} from "react";

export const Folder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15393)">
      <path d="M1 0C0.447715 0 0 0.447715 0 1V5C0 5.55228 0.447715 6 1 6H23C23.5523 6 24 5.55228 24 5V4C24 3.44772 23.5523 3 23 3H10C9.44772 3 9 2.55228 9 2V1C9 0.447715 8.55228 0 8 0H1ZM1 9C0.447716 9 0 9.44772 0 10V22.5C0 23.34 0.66 24 1.5 24H22.5C23.34 24 24 23.34 24 22.5V10C24 9.44772 23.5523 9 23 9H1Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15393">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
