import * as React from "react";
import { SVGProps } from "react";

const SvgArrowCircleLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#arrow-circle-left_svg__a)">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm-1.707 4.707c.63-.63 1.707-.184 1.707.707V8a1 1 0 0 0 1 1h7a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-7a1 1 0 0 0-1 1v2.586c0 .89-1.077 1.337-1.707.707l-6.586-6.586a1 1 0 0 1 0-1.414l6.586-6.586Z" />
    </g>
    <defs>
      <clipPath id="arrow-circle-left_svg__a">
        <path d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgArrowCircleLeft;
