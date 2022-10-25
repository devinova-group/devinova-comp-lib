import * as React from "react";
import {SVGProps} from "react";

export const Headphones = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15382)">
      <path d="M12 0C7.05 0 3 4.05 3 9V10.5C3 11.3284 2.32843 12 1.5 12V12C1.10218 12 0.720644 12.158 0.43934 12.4393C0.158035 12.7206 0 13.1022 0 13.5L0 19.5C0 19.8978 0.158035 20.2794 0.43934 20.5607C0.720644 20.842 1.10218 21 1.5 21H4.5C4.89782 21 5.27936 20.842 5.56066 20.5607C5.84196 20.2794 6 19.8978 6 19.5V9C6 5.67 8.67 3 12 3C15.33 3 18 5.67 18 9V19.5C18 19.8978 18.158 20.2794 18.4393 20.5607C18.7206 20.842 19.1022 21 19.5 21H22.5C22.8978 21 23.2794 20.842 23.5607 20.5607C23.842 20.2794 24 19.8978 24 19.5V13.5C24 13.1022 23.842 12.7206 23.5607 12.4393C23.2794 12.158 22.8978 12 22.5 12V12C21.6716 12 21 11.3284 21 10.5V9C21 4.05 16.95 0 12 0Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15382">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
