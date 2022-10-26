import * as React from "react";
import {SVGProps} from "react";

export const Clock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15441)">
      <path d="M12 0C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24C18.6 24 24 18.6 24 12C24 5.4 18.6 0 12 0ZM12 3C16.98 3 21 7.02 21 12C21 16.98 16.98 21 12 21C7.02 21 3 16.98 3 12C3 7.02 7.02 3 12 3ZM10.5 6V12.184C10.5 12.4852 10.6357 12.7703 10.8694 12.9601L10.98 13.05L12.48 14.55L12.7951 14.9022C13.1779 15.33 13.8415 15.3485 14.2475 14.9425L14.9125 14.2775C15.3185 13.8715 15.3 13.2079 14.8722 12.8251L14.52 12.51L13.7929 11.7829C13.6054 11.5954 13.5 11.341 13.5 11.0758V7.06C13.5 6.50772 13.0523 6.06 12.5 6.06H10.56C10.5269 6.06 10.5 6.03314 10.5 6V6Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15441">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
