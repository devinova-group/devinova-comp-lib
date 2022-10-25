import React from "react";
import {SVGProps} from "react";

export const Ban = (props: SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    height={props.height ? props.height : 24}
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_511_15469)">
      <path d="M12 0C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24C18.6 24 24 18.6 24 12C24 5.4 18.6 0 12 0ZM12 3C13.98 3 15.78 3.63 17.25 4.68L4.68 17.25C3.63 15.78 3 13.98 3 12C3 7.02 7.02 3 12 3V3ZM19.32 6.75C20.37 8.22 21 10.02 21 12C21 16.98 16.98 21 12 21C10.02 21 8.22 20.37 6.75 19.32L19.32 6.75V6.75Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15469">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
