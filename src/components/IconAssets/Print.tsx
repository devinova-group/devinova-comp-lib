import * as React from "react";
import { SVGProps } from "react";

const SvgPrint = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#print_svg__a)">
      <path d="M7 0a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H7ZM.27 9C.09 9 0 9.12 0 9.27v8.43c0 .15.12.27.27.27H2a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h1.73c.15 0 .27-.12.27-.27V9.27c0-.18-.12-.27-.27-.27H.27ZM7 15a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H7Z" />
    </g>
    <defs>
      <clipPath id="print_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPrint;
