import * as React from "react";
import { SVGProps } from "react";

const SvgCalculator = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#calculator_svg__a)">
      <path d="M2.27 0C2.09 0 2 .12 2 .27V23.7c0 .15.12.27.27.27H22.7c.15 0 .27-.12.27-.27V.27c0-.18-.12-.27-.27-.27H2.27ZM5 5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5Zm0 8.5a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 0 1 3 0v6a1.5 1.5 0 0 1-3 0v-6Zm-12 6a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1-3 0Z" />
    </g>
    <defs>
      <clipPath id="calculator_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCalculator;
