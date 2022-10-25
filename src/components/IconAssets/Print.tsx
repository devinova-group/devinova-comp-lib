import * as React from "react";
import {SVGProps} from "react";

export const Print = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15350)">
      <path d="M7 0C6.44772 0 6 0.447715 6 1V5C6 5.55228 6.44772 6 7 6H17C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H7ZM0.27 9C0.09 9 0 9.12 0 9.27V17.7C0 17.85 0.12 17.97 0.27 17.97H2C2.55229 17.97 3 17.5223 3 16.97V12.97C3 12.4177 3.44772 11.97 4 11.97H20C20.5523 11.97 21 12.4177 21 12.97V16.97C21 17.5223 21.4477 17.97 22 17.97H23.73C23.88 17.97 24 17.85 24 17.7V9.27C24 9.09 23.88 9 23.73 9H0.3H0.27ZM7 15C6.44772 15 6 15.4477 6 16V23C6 23.5523 6.44772 24 7 24H17C17.5523 24 18 23.5523 18 23V16C18 15.4477 17.5523 15 17 15H7Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15350">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
