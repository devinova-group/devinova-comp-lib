import * as React from "react";
import {SVGProps} from "react";

export const Flag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clipPath="url(#flag_svg__a)">
      <path d="M1 0a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1Zm5 0v11a1 1 0 0 0 1 1h4a1 1 0 0 1 1 1v1a1 1 0 0 0 1 1h8.56c.894 0 1.339-1.085.702-1.712l-3.55-3.496a1 1 0 0 1-.01-1.414l3.621-3.676C22.946 4.07 22.498 3 21.611 3H16a1 1 0 0 1-1-1V1a1 1 0 0 0-1-1H6Z" />
    </g>
    <defs>
      <clipPath id="flag_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);
