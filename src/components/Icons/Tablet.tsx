import * as React from "react";
import {SVGProps} from "react";

export const Tablet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15326)">
      <path d="M3.02 0C2.48 0 2 0.48 2 1.02V22.95C2 23.49 2.48 23.97 3.02 23.97H21.95C22.49 23.97 22.97 23.49 22.97 22.95V1.02C22.97 0.48 22.49 0 21.95 0L3.02 0ZM5 4C5 3.44772 5.44772 3 6 3H19C19.5523 3 20 3.44772 20 4V17C20 17.5523 19.5523 18 19 18H6C5.44772 18 5 17.5523 5 17V4ZM12.5 19.5C13.64 19.5 14.39 20.76 13.82 21.75C13.25 22.74 11.78 22.74 11.18 21.75C10.61 20.76 11.33 19.5 12.5 19.5Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15326">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
