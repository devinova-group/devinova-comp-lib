import * as React from "react";
import { SVGProps } from "react";

const SvgGraph = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#graph_svg__a)">
      <path d="M21.793.725a1 1 0 0 0-1.42-.014L12.706 8.3a1 1 0 0 1-1.41-.004L9.71 6.711a1 1 0 0 0-1.418.003L.7 14.383a1 1 0 0 0 .004 1.41l1.584 1.585a1 1 0 0 0 1.42-.006l4.585-4.654a1 1 0 0 1 1.42-.006l1.58 1.58a1 1 0 0 0 1.414 0L23.304 3.697a1 1 0 0 0 .01-1.403L21.794.725ZM1 21a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H1Z" />
    </g>
    <defs>
      <clipPath id="graph_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgGraph;
