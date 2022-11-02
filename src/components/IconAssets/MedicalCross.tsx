import * as React from "react";
import { SVGProps } from "react";

const SvgMedicalCross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#medical-cross_svg__a)">
      <path d="M7 0a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-4a1 1 0 0 1-1-1V1a1 1 0 0 0-1-1H7Z" />
    </g>
    <defs>
      <clipPath id="medical-cross_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgMedicalCross;
