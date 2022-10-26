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
    <g clip-path="url(#clip0_511_15359)">
      <path d="M19.4142 1.41421C18.6332 0.633166 17.3668 0.633165 16.5858 1.41421L16.4142 1.58579C15.6332 2.36683 15.6332 3.63316 16.4142 4.41421L19.5858 7.58579C20.3668 8.36683 21.6332 8.36684 22.4142 7.58579L22.5858 7.41421C23.3668 6.63317 23.3668 5.36684 22.5858 4.58579L19.4142 1.41421ZM13.4142 7.41421C12.6332 6.63317 11.3668 6.63317 10.5858 7.41421L0.585786 17.4142C0.210713 17.7893 0 18.298 0 18.8284V22C0 23.1046 0.895431 24 2 24H5.17157C5.70201 24 6.21071 23.7893 6.58579 23.4142L16.5858 13.4142C17.3668 12.6332 17.3668 11.3668 16.5858 10.5858L13.4142 7.41421Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15359">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
