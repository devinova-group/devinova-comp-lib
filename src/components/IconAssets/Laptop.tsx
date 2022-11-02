import * as React from "react";
import { SVGProps } from "react";

const SvgLaptop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#laptop_svg__a)">
      <path d="M4.08 3c-.04 0-.08.006-.116.02A1.5 1.5 0 0 0 3 4.5v9A1.5 1.5 0 0 1 1.5 15 1.5 1.5 0 0 0 0 16.5v3c0 .84.66 1.5 1.5 1.5h21.03c.84 0 1.5-.66 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5 1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 0 0-1.5-1.5h-15a1.497 1.497 0 0 0-.12-.006A5.967 5.967 0 0 0 4.08 3ZM6 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5.5a1.5 1.5 0 0 1-1.5 1.5 1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 16.5 1.5 1.5 0 0 0 7.5 15 1.5 1.5 0 0 1 6 13.5V8Z" />
    </g>
    <defs>
      <clipPath id="laptop_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgLaptop;
