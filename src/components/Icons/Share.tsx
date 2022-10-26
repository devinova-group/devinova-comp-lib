import * as React from "react";
import {SVGProps} from "react";

export const Share = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M16.6875 3.59748C16.05 2.99404 15 3.44593 15 4.32368V7C15 7.55228 14.55 7.99817 13.998 8.01484C6.54667 8.23979 2.80668 11.0086 1.14291 15.3811C0.726015 16.4767 3.08536 17.2577 4.00208 16.5271C6.10503 14.8512 8.83555 14 12 14H14C14.5523 14 15 14.4477 15 15V17.4943C15 18.3977 16.1032 18.838 16.7252 18.1828L23.3105 11.2463C23.6911 10.8453 23.6742 10.2116 23.2728 9.83155L16.6875 3.59748Z" />
  </svg>
);
export const ShareBoxed = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15336)">
      <path d="M2.25 0C1.02 0 0 1.02 0 2.25V18.75C0 19.98 1.02 21 2.25 21H15.75C16.98 21 18 19.98 18 18.75V16C18 15.4477 17.5523 15 17 15H16C15.4477 15 15 15.4477 15 16V17C15 17.5523 14.5523 18 14 18H4C3.44772 18 3 17.5523 3 17V4C3 3.44772 3.44772 3 4 3H8C8.55228 3 9 2.55228 9 2V1C9 0.447715 8.55228 0 8 0H2.25ZM18 0V2C18 2.55228 17.5509 2.9956 17.0005 3.04106C11.3203 3.51029 6.86055 7.94708 6.18 13.59C6.81 10.95 9.15 9 12 9H17.1213C17.6066 9 18 9.3934 18 9.87868V9.87868C18 10.6615 18.9465 11.0535 19.5 10.5L23.2929 6.70711C23.6834 6.31658 23.6834 5.68342 23.2929 5.29289L18 0C18 0 18 0 18 0V0Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15336">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
