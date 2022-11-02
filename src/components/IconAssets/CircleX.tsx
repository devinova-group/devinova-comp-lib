import * as React from "react";
import { SVGProps } from "react";

const SvgCircleX = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#circle-x_svg__a)">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0ZM6.793 6.047a1 1 0 0 1 1.414 0l3.086 3.086a1 1 0 0 0 1.414 0l3.086-3.086a1 1 0 0 1 1.414 0l.746.746a1 1 0 0 1 0 1.414l-3.086 3.086a1 1 0 0 0 0 1.414l3.086 3.086a1 1 0 0 1 0 1.414l-.746.746a1 1 0 0 1-1.414 0l-3.086-3.086a1 1 0 0 0-1.414 0l-3.086 3.086a1 1 0 0 1-1.414 0l-.746-.746a1 1 0 0 1 0-1.414l3.086-3.086a1 1 0 0 0 0-1.414L6.047 8.207a1 1 0 0 1 0-1.414l.746-.746Z" />
    </g>
    <defs>
      <clipPath id="circle-x_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCircleX;
