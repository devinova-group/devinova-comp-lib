import * as React from "react";
import {SVGProps} from "react";

export const PieChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15355)">
      <path d="M10.5 0C7.95249 0 5.6349 0.919657 3.82901 2.41681C3.40383 2.76929 3.40658 3.40658 3.79711 3.79711L10.2929 10.2929C10.9229 10.9229 12 10.4767 12 9.58579V0.972782C12 0.468459 11.6244 0.0392607 11.1206 0.0149056C10.9151 0.00496854 10.7076 0 10.5 0ZM16.1353 3.41132C15.5446 3.25716 15 3.72826 15 4.33881V12.9958C15 13.261 14.8946 13.5154 14.7071 13.7029L7.62064 20.7894C7.20256 21.2074 7.23476 21.8989 7.72633 22.2275C9.38614 23.3369 11.3468 24 13.5 24C19.29 24 24 19.29 24 13.5C24 8.62141 20.6448 4.58802 16.1353 3.41132ZM3.42432 7.79265C3.0379 7.41272 2.41416 7.40634 2.06639 7.82193C0.778105 9.36143 0 11.3307 0 13.5C0 16.0605 1.09081 18.3128 2.80861 19.9405C3.17605 20.2887 3.74939 20.2506 4.10733 19.8927L9.15688 14.8431C9.54974 14.4503 9.54704 13.8125 9.15086 13.4229L3.42432 7.79265Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15355">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);