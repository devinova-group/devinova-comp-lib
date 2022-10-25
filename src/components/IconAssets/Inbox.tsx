import * as React from "react";
import {SVGProps} from "react";

export const Inbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15507)">
      <path d="M0.57 0C0.57 0 0.57 0 0.57 0C0.24 0 0 0.24 0 0.57V23.46C0 23.79 0.24 24.03 0.57 24.03H23.46C23.79 24.03 24.03 23.79 24.03 23.46V0.57C24.03 0.24 23.79 0 23.46 0H0.57C0.57 0 0.57 0 0.57 0V0ZM3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7V14C21 14.5523 20.5523 15 20 15H18.4142C18.149 15 17.8946 15.1054 17.7071 15.2929L15.2929 17.7071C15.1054 17.8946 14.851 18 14.5858 18H9.41421C9.149 18 8.89464 17.8946 8.70711 17.7071L6.29289 15.2929C6.10536 15.1054 5.851 15 5.58579 15H4C3.44772 15 3 14.5523 3 14V7Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15507">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
