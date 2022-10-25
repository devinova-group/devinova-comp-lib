import * as React from "react";
import {SVGProps} from "react";

export const Droplet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15407)">
      <path d="M12 0L10.98 1.02C10.65 1.35 3 9.09 3 15.66C3 20.61 7.05 24.66 12 24.66C16.95 24.66 21 20.61 21 15.66C21 9.12 13.35 1.35 13.02 1.02L12 0V0ZM7.5 14.16C8.34 14.16 9 14.82 9 15.66C9 17.31 10.35 18.66 12 18.66C12.84 18.66 13.5 19.32 13.5 20.16C13.5 21 12.84 21.66 12 21.66C8.7 21.66 6 18.96 6 15.66C6 14.82 6.66 14.16 7.5 14.16Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15407">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
