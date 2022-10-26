import * as React from "react";
import {SVGProps} from "react";

export const Text = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15320)">
      <path d="M1 0C0.447716 0 0 0.447715 0 1V5.25C0 5.66421 0.335786 6 0.75 6V6C1.16421 6 1.49045 5.65893 1.59353 5.25775C1.92603 3.96367 3.10594 3 4.5 3H8C8.55228 3 9 3.44772 9 4V19.5C9 20.34 8.34 21 7.5 21H7C6.44772 21 6 21.4477 6 22V23C6 23.5523 6.44772 24 7 24H17C17.5523 24 18 23.5523 18 23V22C18 21.4477 17.5523 21 17 21H16.5C15.66 21 15 20.34 15 19.5V4C15 3.44772 15.4477 3 16 3H19.5C20.8941 3 22.074 3.96367 22.4065 5.25775C22.5096 5.65893 22.8358 6 23.25 6V6C23.6642 6 24 5.66421 24 5.25V1C24 0.447715 23.5523 0 23 0H1Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15320">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
