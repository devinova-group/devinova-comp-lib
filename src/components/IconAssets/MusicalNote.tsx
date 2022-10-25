import * as React from "react";
import {SVGProps} from "react";

export const MusicalNote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15361)">
      <path d="M24 0C9 0 6 3 6 3V15.27C5.55 15.12 5.01 15 4.5 15C2.01 15 0 17.01 0 19.5C0 21.99 2.01 24 4.5 24C6.99 24 9 21.99 9 19.5V7.59C11.19 6.9 14.97 6.27 21 6.09V12.27C20.55 12.12 20.01 12 19.5 12C17.01 12 15 14.01 15 16.5C15 18.99 17.01 21 19.5 21C21.99 21 24 18.99 24 16.5V0Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15361">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
