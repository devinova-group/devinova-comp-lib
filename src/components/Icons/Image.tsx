import * as React from "react";
import {SVGProps} from "react";

export const Image = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15379)">
      <path d="M1 0C0.447716 0 0 0.447715 0 1V23C0 23.5523 0.447715 24 1 24H23C23.5523 24 24 23.5523 24 23V1C24 0.447716 23.5523 0 23 0H1ZM3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V9.58579C21 10.4767 19.9229 10.9229 19.2929 10.2929L18.7071 9.70711C18.3166 9.31658 17.6834 9.31658 17.2929 9.70711L15.7071 11.2929C15.3166 11.6834 15.3166 12.3166 15.7071 12.7071L20.7071 17.7071C20.8946 17.8946 21 18.149 21 18.4142V20C21 20.5523 20.5523 21 20 21H18.4142C18.149 21 17.8946 20.8946 17.7071 20.7071L6.70711 9.70711C6.31658 9.31658 5.68342 9.31658 5.29289 9.70711L4.70711 10.2929C4.07714 10.9229 3 10.4767 3 9.58579V4Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15379">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
