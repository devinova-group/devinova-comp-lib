import * as React from "react";
import { SVGProps } from "react";

const SvgBrowser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#browser_svg__a)">
      <path d="M1.02 0A1.5 1.5 0 0 0 0 1.5v21A1.5 1.5 0 0 0 1.5 24h21a1.5 1.5 0 0 0 1.5-1.5v-21A1.5 1.5 0 0 0 22.5 0h-21a1.5 1.5 0 0 0-.27 0 1.5 1.5 0 0 0-.18 0h-.03ZM4.5 3C5.34 3 6 3.66 6 4.5S5.34 6 4.5 6 3 5.34 3 4.5 3.66 3 4.5 3Zm6 0h9c.84 0 1.5.66 1.5 1.5S20.34 6 19.5 6h-9C9.66 6 9 5.34 9 4.5S9.66 3 10.5 3ZM3 9h18v12H3V9Z" />
    </g>
    <defs>
      <clipPath id="browser_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgBrowser;
