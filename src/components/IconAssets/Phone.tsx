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
    <g clip-path="url(#clip0_511_15356)">
      <path d="M4.57 0C4.24 0 4 0.24 4 0.57V23.46C4 23.79 4.24 24.03 4.57 24.03H18.46C18.79 24.03 19.03 23.79 19.03 23.46V0.57C19.03 0.24 18.79 0 18.46 0L4.57 0ZM7 4C7 3.44772 7.44772 3 8 3H15C15.5523 3 16 3.44772 16 4V17C16 17.5523 15.5523 18 15 18H8C7.44772 18 7 17.5523 7 17V4ZM11.5 19.5C12.34 19.5 13 20.16 13 21C13 21.84 12.34 22.5 11.5 22.5C10.66 22.5 10 21.84 10 21C10 20.16 10.66 19.5 11.5 19.5Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15356">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
