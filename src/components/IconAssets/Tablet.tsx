import * as React from "react";
import { SVGProps } from "react";

const SvgTablet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#tablet_svg__a)">
      <path d="M3.02 0C2.48 0 2 .48 2 1.02v21.93c0 .54.48 1.02 1.02 1.02h18.93c.54 0 1.02-.48 1.02-1.02V1.02c0-.54-.48-1.02-1.02-1.02H3.02ZM5 4a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4Zm7.5 15.5c1.14 0 1.89 1.26 1.32 2.25-.57.99-2.04.99-2.64 0-.57-.99.15-2.25 1.32-2.25Z" />
    </g>
    <defs>
      <clipPath id="tablet_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTablet;
