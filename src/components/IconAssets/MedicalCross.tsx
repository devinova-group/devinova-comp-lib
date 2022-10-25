import * as React from "react";
import {SVGProps} from "react";

export const MedicalCross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15368)">
      <path d="M7 0C6.44772 0 6 0.447715 6 1V5C6 5.55228 5.55228 6 5 6H1C0.447715 6 0 6.44772 0 7V17C0 17.5523 0.447715 18 1 18H5C5.55228 18 6 18.4477 6 19V23C6 23.5523 6.44772 24 7 24H17C17.5523 24 18 23.5523 18 23V19C18 18.4477 18.4477 18 19 18H23C23.5523 18 24 17.5523 24 17V7C24 6.44772 23.5523 6 23 6H19C18.4477 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H7Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15368">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
