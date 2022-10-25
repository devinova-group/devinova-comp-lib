import * as React from "react";
import {SVGProps} from "react";

export const Italic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15510)">
      <path d="M6.00003 0V1.09201C6.00003 2.14577 6.85426 3 7.90802 3H10.4605C10.6611 3 10.7941 3.20789 10.71 3.39V3.39L4.71003 18.39L4.18427 19.7508C3.88642 20.5217 3.1451 21.03 2.31867 21.03H1.53003C0.701601 21.03 0.0300293 21.7016 0.0300293 22.53V22.53C0.0300293 23.3584 0.701602 24.03 1.53003 24.03H13.53C14.3585 24.03 15.03 23.3584 15.03 22.53V22.53C15.03 21.7016 14.3585 21.03 13.53 21.03H10.5696C10.369 21.03 10.236 20.8221 10.32 20.64V20.64L16.32 5.64L16.8458 4.2792C17.1436 3.50831 17.885 3 18.7114 3H19.5C20.3285 3 21 2.32843 21 1.5V1.5C21 0.671573 20.3285 0 19.5 0H6.00003C6.00003 0 6.00003 0 6.00003 0V0Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15510">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
