import * as React from "react";
import { SVGProps } from "react";

const SvgHeadphones = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#headphones_svg__a)">
      <path d="M12 0C7.05 0 3 4.05 3 9v1.5A1.5 1.5 0 0 1 1.5 12 1.5 1.5 0 0 0 0 13.5v6A1.5 1.5 0 0 0 1.5 21h3A1.5 1.5 0 0 0 6 19.5V9c0-3.33 2.67-6 6-6s6 2.67 6 6v10.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-1.5-1.5 1.5 1.5 0 0 1-1.5-1.5V9c0-4.95-4.05-9-9-9Z" />
    </g>
    <defs>
      <clipPath id="headphones_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgHeadphones;
