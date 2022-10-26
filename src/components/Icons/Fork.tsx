import * as React from "react";
import {SVGProps} from "react";

export const Fork = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15392)">
      <path d="M6.5 0C4.01 0 2 2.01 2 4.5C2 6.48 3.23 8.1 5 8.73V15.3C3.23 15.9 2 17.55 2 19.53C2 22.02 4.01 24.03 6.5 24.03C8.99 24.03 11 22.02 11 19.53C11 17.73 9.98 16.23 8.48 15.51C8.75 15.24 9.11 15.03 9.5 15.03H15.5C17.96 15.03 20 12.99 20 10.53V8.76C21.77 8.16 23 6.51 23 4.53C23 2.04 20.99 0.03 18.5 0.03C16.01 0.03 14 2.04 14 4.53C14 6.51 15.23 8.13 17 8.76V10.53C17 11.37 16.34 12.03 15.5 12.03H9.5C8.99 12.03 8.45 12.15 8 12.3V8.73C9.77 8.13 11 6.48 11 4.5C11 2.01 8.99 0 6.5 0V0Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15392">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
