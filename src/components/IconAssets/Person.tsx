import * as React from "react";
import {SVGProps} from "react";

export const Pencil = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15357)">
      <path d="M12 0C8.7 0 6 3.36 6 7.5C6 11.64 8.7 15 12 15C15.3 15 18 11.64 18 7.5C18 3.36 15.3 0 12 0ZM5.73 15C2.55 15.15 0 17.76 0 21V24H24V21C24 17.76 21.48 15.15 18.27 15C16.65 16.83 14.43 18 12 18C9.57 18 7.35 16.83 5.73 15Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15357">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
