import * as React from "react";
import { SVGProps } from "react";

const SvgEllipses1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#ellipses-1_svg__a)">
      <path d="M15 2a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V2Zm0 9a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2Zm0 9a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2Z" />
    </g>
    <defs>
      <clipPath id="ellipses-1_svg__a">
        <rect
          x={24}
          width={24}
          height={24}
          rx={2}
          transform="rotate(90 24 0)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default SvgEllipses1;
