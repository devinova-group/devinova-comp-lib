import * as React from "react";
import {SVGProps} from "react";

export const Bell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15518)">
      <path d="M12 0C8.7 0 6 2.7 6 6C6 9.12 4.44 11.94 1.98 13.98C1.28555 14.5559 0.744104 15.2657 0.404262 16.0553C-0.0323859 17.0699 0.895431 18 2 18H22C23.1046 18 24.036 17.07 23.6045 16.0532C23.2697 15.2644 22.7307 14.5554 22.02 13.98C19.56 11.94 18 9.12 18 6C18 2.7 15.33 0 12 0ZM11 21C9.89543 21 8.96082 21.9871 9.64555 22.8538C10.1962 23.5507 11.0482 24 12 24C12.9518 24 13.8038 23.5507 14.3544 22.8538C15.0392 21.9871 14.1046 21 13 21H11Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15518">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
