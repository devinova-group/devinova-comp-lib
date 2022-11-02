import * as React from "react";
import { SVGProps } from "react";

const SvgLayers = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#layers_svg__a)">
      <path d="M0 0v12h12V0H0Zm15 6v9H6v3h12V6h-3Zm6 6v9h-9v3h12V12h-3Z" />
    </g>
    <defs>
      <clipPath id="layers_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgLayers;
