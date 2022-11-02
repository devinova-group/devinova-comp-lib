import * as React from "react";
import { SVGProps } from "react";

const SvgArrowCircleBottom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#arrow-circle-bottom_svg__a)">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0ZM9 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7a1 1 0 0 0 1 1h2.586c.89 0 1.337 1.077.707 1.707l-6.586 6.586a1 1 0 0 1-1.414 0l-6.586-6.586c-.63-.63-.184-1.707.707-1.707H8a1 1 0 0 0 1-1V4Z" />
    </g>
    <defs>
      <clipPath id="arrow-circle-bottom_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgArrowCircleBottom;
