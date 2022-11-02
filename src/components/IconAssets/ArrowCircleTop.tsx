import * as React from "react";
import { SVGProps } from "react";

const SvgArrowCircleTop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#arrow-circle-top_svg__a)">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm-.707 3.707a1 1 0 0 1 1.414 0l6.586 6.586c.63.63.184 1.707-.707 1.707H16a1 1 0 0 0-1 1v7a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-7a1 1 0 0 0-1-1H5.414c-.89 0-1.337-1.077-.707-1.707l6.586-6.586Z" />
    </g>
    <defs>
      <clipPath id="arrow-circle-top_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgArrowCircleTop;
