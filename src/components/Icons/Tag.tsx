import * as React from "react";
import {SVGProps} from "react";

export const Tag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15325)">
      <path d="M2 0C0.89543 0 0 0.895431 0 2V8.17157C0 8.70201 0.210714 9.21071 0.585786 9.58579L13.5858 22.5858C14.3668 23.3668 15.6332 23.3668 16.4142 22.5858L22.5858 16.4142C23.3668 15.6332 23.3668 14.3668 22.5858 13.5858L9.58579 0.585786C9.21071 0.210714 8.70201 0 8.17157 0H2ZM6 3C7.65 3 9 4.35 9 6C9 7.65 7.65 9 6 9C4.35 9 3 7.65 3 6C3 4.35 4.35 3 6 3Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15325">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
