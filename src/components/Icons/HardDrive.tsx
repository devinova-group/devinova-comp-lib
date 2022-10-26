import * as React from "react";
import {SVGProps} from "react";

export const HardDrive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15384)">
      <path d="M1.57 0C1.24 0 1 0.24 1 0.57V10.5C1 11.34 1.66 12 2.5 12H20.5C21.34 12 22 11.34 22 10.5V0.57C22 0.24 21.76 0 21.43 0H1.54L1.57 0ZM1.02603 14.73C1.01165 14.73 1 14.7417 1 14.756V23.46C1 23.79 1.24 24.03 1.57 24.03H21.46C21.79 24.03 22.03 23.79 22.03 23.46V16.2627C22.03 15.5211 21.2716 15 20.53 15V15H2.53C1.99142 15 1.51253 14.8806 1.03379 14.7312C1.03128 14.7304 1.02866 14.73 1.02603 14.73V14.73ZM17.5 18C18.34 18 19 18.66 19 19.5C19 20.34 18.34 21 17.5 21C16.66 21 16 20.34 16 19.5C16 18.66 16.66 18 17.5 18Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15384">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
