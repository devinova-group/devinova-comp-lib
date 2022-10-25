import * as React from "react";
import {SVGProps} from "react";

export const ExternalLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15400)">
      <path d="M1 0C0.447715 0 0 0.447715 0 1V23C0 23.5523 0.447715 24 1 24H23C23.5523 24 24 23.5523 24 23V19C24 18.4477 23.5523 18 23 18H22C21.4477 18 21 18.4477 21 19V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H5C5.55228 3 6 2.55228 6 2V1C6 0.447715 5.55228 0 5 0H1ZM14.4142 0C13.5233 0 13.0771 1.07714 13.7071 1.70711L15.7929 3.79289C16.1834 4.18342 16.1834 4.81658 15.7929 5.20711L9.70711 11.2929C9.31658 11.6834 9.31658 12.3166 9.70711 12.7071L11.2929 14.2929C11.6834 14.6834 12.3166 14.6834 12.7071 14.2929L18.7929 8.20711C19.1834 7.81658 19.8166 7.81658 20.2071 8.20711L22.2929 10.2929C22.9229 10.9229 24 10.4767 24 9.58579V1C24 0.447715 23.5523 0 23 0H14.4142Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15400">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
