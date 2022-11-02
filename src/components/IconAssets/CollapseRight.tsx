import * as React from "react";
import { SVGProps } from "react";

const SvgCollapseRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#collapse-right_svg__a)">
      <path d="M1 0a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1Zm21 0a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-1ZM10.707 7.707C10.077 7.077 9 7.523 9 8.414v7.172c0 .89 1.077 1.337 1.707.707l3.586-3.586a1 1 0 0 0 0-1.414l-3.586-3.586Z" />
    </g>
    <defs>
      <clipPath id="collapse-right_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCollapseRight;
