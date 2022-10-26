import * as React from "react";
import {SVGProps} from "react";

export const Location = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15475)">
      <path d="M21.3167 5.36656C22.1763 3.64745 20.3525 1.82373 18.6334 2.68328L4.31867 9.84066C2.72498 10.6375 2.89028 12.9634 4.58065 13.5269L8.05132 14.6838C8.64853 14.8828 9.11716 15.3515 9.31623 15.9487L10.4731 19.4194C11.0366 21.1097 13.3625 21.275 14.1593 19.6813L21.3167 5.36656Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15475">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
