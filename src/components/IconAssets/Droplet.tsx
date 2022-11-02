import * as React from "react";
import { SVGProps } from "react";

const SvgDroplet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#droplet_svg__a)">
      <path d="m12 0-1.02 1.02C10.65 1.35 3 9.09 3 15.66c0 4.95 4.05 9 9 9s9-4.05 9-9c0-6.54-7.65-14.31-7.98-14.64L12 0ZM7.5 14.16c.84 0 1.5.66 1.5 1.5 0 1.65 1.35 3 3 3 .84 0 1.5.66 1.5 1.5s-.66 1.5-1.5 1.5c-3.3 0-6-2.7-6-6 0-.84.66-1.5 1.5-1.5Z" />
    </g>
    <defs>
      <clipPath id="droplet_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgDroplet;
