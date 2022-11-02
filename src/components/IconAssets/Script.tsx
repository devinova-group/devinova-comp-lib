import * as React from "react";
import { SVGProps } from "react";

const SvgScript = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#script_svg__a)">
      <path d="M9 0C7.35 0 6 1.35 6 3v16.5c0 .84-.66 1.5-1.5 1.5S3 20.34 3 19.5v-3a1.5 1.5 0 0 0-3 0V21c0 1.65 1.35 3 3 3h15c1.65 0 3-1.35 3-3v-7a2 2 0 0 0-2-2h-8a2 2 0 0 1-2-2V4.5c0-.84.66-1.5 1.5-1.5s1.5.66 1.5 1.5V7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3c0-1.65-1.35-3-3-3H9Z" />
    </g>
    <defs>
      <clipPath id="script_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgScript;
