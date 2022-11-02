import * as React from "react";
import { SVGProps } from "react";

const SvgFork = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#fork_svg__a)">
      <path d="M6.5 0C4.01 0 2 2.01 2 4.5c0 1.98 1.23 3.6 3 4.23v6.57c-1.77.6-3 2.25-3 4.23 0 2.49 2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5c0-1.8-1.02-3.3-2.52-4.02.27-.27.63-.48 1.02-.48h6c2.46 0 4.5-2.04 4.5-4.5V8.76c1.77-.6 3-2.25 3-4.23 0-2.49-2.01-4.5-4.5-4.5S14 2.04 14 4.53c0 1.98 1.23 3.6 3 4.23v1.77c0 .84-.66 1.5-1.5 1.5h-6c-.51 0-1.05.12-1.5.27V8.73c1.77-.6 3-2.25 3-4.23C11 2.01 8.99 0 6.5 0Z" />
    </g>
    <defs>
      <clipPath id="fork_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFork;
