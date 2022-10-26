import * as React from "react";
import {SVGProps} from "react";

export const PlayCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15353)">
      <path d="M12 0C5.37 0 0 5.37 0 12C0 18.63 5.37 24 12 24C18.63 24 24 18.63 24 12C24 5.37 18.63 0 12 0ZM9 7.86852C9 7.06982 9.89015 6.59343 10.5547 7.03647L16.7519 11.1679C17.3457 11.5638 17.3457 12.4362 16.7519 12.8321L10.5547 16.9635C9.89015 17.4066 9 16.9302 9 16.1315V7.86852Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15353">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
