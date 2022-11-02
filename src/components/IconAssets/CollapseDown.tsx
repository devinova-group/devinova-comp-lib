import * as React from "react";
import { SVGProps } from "react";

const SvgCollapseDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#collapse-down_svg__a)">
      <path d="M1 0a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1Zm7.414 9c-.89 0-1.337 1.077-.707 1.707l3.586 3.586a1 1 0 0 0 1.414 0l3.586-3.586c.63-.63.184-1.707-.707-1.707H8.414ZM1 21a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H1Z" />
    </g>
    <defs>
      <clipPath id="collapse-down_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCollapseDown;
