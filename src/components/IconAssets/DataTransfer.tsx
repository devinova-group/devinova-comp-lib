import * as React from "react";
import {SVGProps} from "react";

export const Download = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15417)">
      <path d="M10 0C9.44772 0 9 0.447715 9 1V8C9 8.55228 8.55228 9 8 9H5.41421C4.52331 9 4.07714 10.0771 4.70711 10.7071L11.2929 17.2929C11.6834 17.6834 12.3166 17.6834 12.7071 17.2929L19.2929 10.7071C19.9229 10.0771 19.4767 9 18.5858 9H16C15.4477 9 15 8.55228 15 8V1C15 0.447715 14.5523 0 14 0H10ZM1 21C0.447716 21 0 21.4477 0 22V23C0 23.5523 0.447715 24 1 24H23C23.5523 24 24 23.5523 24 23V22C24 21.4477 23.5523 21 23 21H1Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15417">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export const Upload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15416)">
      <path d="M1 0C0.447716 0 0 0.447715 0 1V2C0 2.55228 0.447715 3 1 3H23C23.5523 3 24 2.55228 24 2V1C24 0.447715 23.5523 0 23 0H1ZM12.7071 6.70711C12.3166 6.31658 11.6834 6.31658 11.2929 6.70711L4.7071 13.2929C4.07714 13.9229 4.52331 15 5.41421 15H8C8.55228 15 9 15.4477 9 16V23C9 23.5523 9.44772 24 10 24H14C14.5523 24 15 23.5523 15 23V16C15 15.4477 15.4477 15 16 15H18.5858C19.4767 15 19.9229 13.9229 19.2929 13.2929L12.7071 6.70711Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15416">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
