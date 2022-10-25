import * as React from "react";
import {SVGProps} from "react";

export const Moon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15363)">
      <path d="M8.16 0C8.16 0 8.16 0 8.16 0C3.42 1.59 0 6.06 0 11.34C0 17.97 5.37 23.34 12 23.34C16.5755 23.34 20.5427 20.7718 22.5546 17.0019C22.9414 16.2772 22.2253 15.5244 21.4163 15.667C20.7939 15.7766 20.154 15.84 19.5 15.84C12.87 15.84 7.5 10.47 7.5 3.84C7.5 2.49 7.74 1.2 8.16 0C8.16 0 8.16 0 8.16 0V0Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15363">
        <rect width="24" height="24" rx="1" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
