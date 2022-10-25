import * as React from "react";
import {SVGProps} from "react";

export const Contrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15422)">
      <path d="M12 0C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24C18.6 24 24 18.6 24 12C24 5.4 18.6 0 12 0ZM12 3C16.98 3 21 7.02 21 12C21 16.98 16.98 21 12 21V3Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15422">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
