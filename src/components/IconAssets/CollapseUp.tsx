import * as React from "react";
import { SVGProps } from "react";

const SvgCollapseUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#collapse-up_svg__a)">
      <path d="M1 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1Zm11.707 9.707a1 1 0 0 0-1.414 0l-3.586 3.586c-.63.63-.184 1.707.707 1.707h7.172c.89 0 1.337-1.077.707-1.707l-3.586-3.586ZM1 18a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H1Z" />
    </g>
    <defs>
      <clipPath id="collapse-up_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCollapseUp;
