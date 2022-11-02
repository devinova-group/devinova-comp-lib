import * as React from "react";
import { SVGProps } from "react";

const SvgContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#contrast_svg__a)">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0Zm0 3c4.98 0 9 4.02 9 9s-4.02 9-9 9V3Z" />
    </g>
    <defs>
      <clipPath id="contrast_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgContrast;
