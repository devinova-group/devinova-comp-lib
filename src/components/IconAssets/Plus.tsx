import * as React from "react";
import { SVGProps } from "react";

const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#plus_svg__a)">
      <path d="M10 0a1 1 0 0 0-1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h7a1 1 0 0 1 1 1v7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7a1 1 0 0 1 1-1h7a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-7a1 1 0 0 1-1-1V1a1 1 0 0 0-1-1h-4Z" />
    </g>
    <defs>
      <clipPath id="plus_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPlus;
