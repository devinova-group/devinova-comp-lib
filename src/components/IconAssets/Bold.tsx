import * as React from "react";
import { SVGProps } from "react";

const SvgBold = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#bold_svg__a)">
      <path d="M0 0v2c0 .552.46.984.982 1.166A3.012 3.012 0 0 1 3 6v12a3.012 3.012 0 0 1-2.018 2.834C.46 21.016 0 21.448 0 22v1a1 1 0 0 0 1 1h15.5c4.14 0 7.5-3.36 7.5-7.5 0-2.55-1.278-4.774-3.227-6.12-.53-.367-.704-1.116-.415-1.693A6 6 0 0 0 21 6c0-3.3-2.67-6-6-6H0Zm9 4a1 1 0 0 1 1-1h2c1.65 0 3 1.35 3 3s-1.35 3-3 3h-2a1 1 0 0 1-1-1V4Zm0 9a1 1 0 0 1 1-1h3.5c2.49 0 4.5 2.01 4.5 4.5S15.99 21 13.5 21H10a1 1 0 0 1-1-1v-7Z" />
    </g>
    <defs>
      <clipPath id="bold_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgBold;
