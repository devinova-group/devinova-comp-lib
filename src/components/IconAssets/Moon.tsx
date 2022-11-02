import * as React from "react";
import { SVGProps } from "react";

const SvgMoon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#moon_svg__a)">
      <path d="M8.16 0C3.42 1.59 0 6.06 0 11.34c0 6.63 5.37 12 12 12 4.576 0 8.543-2.568 10.555-6.338.386-.725-.33-1.478-1.139-1.335-.622.11-1.262.173-1.916.173-6.63 0-12-5.37-12-12 0-1.35.24-2.64.66-3.84Z" />
    </g>
    <defs>
      <clipPath id="moon_svg__a">
        <rect width={24} height={24} rx={1} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgMoon;
