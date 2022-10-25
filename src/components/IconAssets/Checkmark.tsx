import React from "react";
import {SVGProps} from "react";

export const CheckmarkCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height={props.height ? props.height : 24}
    role="img"
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="12" />
    <path d="M17.741 6.58219C17.3434 6.19285 16.7044 6.20301 16.3194 6.60479L15.725 7.225L11.2064 11.7436C10.8211 12.1289 10.1982 12.1348 9.80564 11.7568L8.99375 10.975L8.35086 10.3321C7.96033 9.94158 7.32717 9.94158 6.93664 10.3321L5.70711 11.5616C5.31658 11.9522 5.31658 12.5853 5.70711 12.9759L6.35 13.6188L9.1625 16.4313L9.74947 17.0437C10.1374 17.4485 10.7821 17.4554 11.1786 17.0589L11.8063 16.4313L18.3688 9.86875L19.0042 9.23334C19.3976 8.83991 19.3942 8.20099 18.9967 7.81172L17.741 6.58219Z" />
  </svg>
);
