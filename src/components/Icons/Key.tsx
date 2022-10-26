import * as React from "react";
import {SVGProps} from "react";

export const Key = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15499)">
      <path d="M16.5 0C12.36 0 9 3.36 9 7.5C9 7.79555 9 8.09109 9.02101 8.37964C9.04529 8.71311 8.94799 9.05201 8.71157 9.28843L0.292893 17.7071C0.105356 17.8946 0 18.149 0 18.4142V23C0 23.5523 0.447715 24 1 24H8C8.55228 24 9 23.5523 9 23V19C9 18.4477 9.44772 18 10 18H14C14.5523 18 15 17.5523 15 17V15.0555C15 15.02 15.0141 14.9859 15.0393 14.9607V14.9607C15.071 14.929 15.1164 14.9155 15.1605 14.9233C15.59 15 16.045 15 16.5 15C20.64 15 24 11.64 24 7.5C24 3.36 20.64 0 16.5 0ZM18 3C19.65 3 21 4.35 21 6C21 7.65 19.65 9 18 9C16.35 9 15 7.65 15 6C15 4.35 16.35 3 18 3Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15499">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
