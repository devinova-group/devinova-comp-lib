import * as React from "react";
import { SVGProps } from "react";

const SvgLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#location_svg__a)">
      <path d="M21.317 5.367c.86-1.72-.965-3.543-2.684-2.684L4.32 9.841c-1.594.796-1.429 3.122.262 3.686l3.47 1.157a2 2 0 0 1 1.265 1.265l1.157 3.47c.564 1.69 2.89 1.856 3.686.262l7.158-14.314Z" />
    </g>
    <defs>
      <clipPath id="location_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgLocation;
