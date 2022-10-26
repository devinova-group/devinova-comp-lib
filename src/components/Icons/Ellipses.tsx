import React from "react";
import {SVGProps} from "react";

export const Ellipses1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height={props.height ? props.height : 24}
    role="img"
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_511_15405)">
      <path d="M15 2C15 0.89543 14.1046 -3.91405e-08 13 -8.74228e-08L11 -1.74846e-07C9.89543 -2.23128e-07 9 0.89543 9 2L9 4C9 5.10457 9.89543 6 11 6L13 6C14.1046 6 15 5.10457 15 4L15 2ZM15 11C15 9.89543 14.1046 9 13 9L11 9C9.89543 9 9 9.89543 9 11L9 13C9 14.1046 9.89543 15 11 15L13 15C14.1046 15 15 14.1046 15 13L15 11ZM15 20C15 18.8954 14.1046 18 13 18L11 18C9.89543 18 9 18.8954 9 20L9 22C9 23.1046 9.89543 24 11 24L13 24C14.1046 24 15 23.1046 15 22L15 20Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15405">
        <rect
          x="24"
          width="24"
          height="24"
          rx="2"
          transform="rotate(90 24 0)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const Ellipses = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height={props.height ? props.height : 24}
    role="img"
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 9C0.89543 9 0 9.89543 0 11V13C0 14.1046 0.895431 15 2 15H4C5.10457 15 6 14.1046 6 13V11C6 9.89543 5.10457 9 4 9H2ZM11 9C9.89543 9 9 9.89543 9 11V13C9 14.1046 9.89543 15 11 15H13C14.1046 15 15 14.1046 15 13V11C15 9.89543 14.1046 9 13 9H11ZM20 9C18.8954 9 18 9.89543 18 11V13C18 14.1046 18.8954 15 20 15H22C23.1046 15 24 14.1046 24 13V11C24 9.89543 23.1046 9 22 9H20Z" />
  </svg>
);
