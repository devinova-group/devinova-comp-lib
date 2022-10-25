import * as React from "react";
import { SVGProps } from "react";

const SvgDollar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#dollar_svg__a)">
      <path d="M10.03 0v2a1 1 0 0 1-1 1H7.78C5.74 3 4.03 4.71 4.03 6.75v1.5c0 2.04 1.32 3.72 3.27 4.23l7.68 1.98c.42.12 1.02.87 1.02 1.32v1.5c0 .42-.33.75-.75.75h-7.5a1.64 1.64 0 0 1-.16-.008c-.376-.037-.59-.411-.59-.79V16.03a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2c0 1.02.6 1.89 1.32 2.34.69.48 1.56.66 2.43.66H9a1 1 0 0 1 1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1.25c2.07 0 3.75-1.68 3.75-3.75v-1.5c0-2.04-1.32-3.72-3.27-4.23L8.05 9.57c-.42-.12-1.02-.87-1.02-1.32v-1.5c0-.42.33-.75.75-.75h7.5c.055 0 .108.003.16.009.376.041.59.41.59.789V8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V6c0-1.02-.6-1.89-1.32-2.34-.69-.48-1.56-.66-2.43-.66h-1.25a1 1 0 0 1-1-1V1a1 1 0 0 0-1-1h-2Z" />
    </g>
    <defs>
      <clipPath id="dollar_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgDollar;
