import * as React from "react";
import { SVGProps } from "react";

const SvgZoomIn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#zoom-in_svg__a)">
      <path d="M10.5 0C4.71 0 0 4.71 0 10.5S4.71 21 10.5 21c1.662 0 3.25-.396 4.65-1.098.236-.118.523-.036.69.168l3 3.09a3.06 3.06 0 1 0 4.32-4.32l-3.09-3c-.205-.167-.29-.454-.173-.692C20.58 13.748 21 12.16 21 10.5 21 4.71 16.29 0 10.5 0Zm0 2.985c0 .008.007.015.015.015A7.465 7.465 0 0 1 18 10.5c0 1.77-.6 3.42-1.59 4.68a.806.806 0 0 1-.204.146l-.012.005a.62.62 0 0 0-.102.067 2.997 2.997 0 0 0-.612.661 1.112 1.112 0 0 1-.22.247 7.575 7.575 0 0 1-4.76 1.664c-4.17 0-7.5-3.33-7.5-7.5a7.464 7.464 0 0 1 7.485-7.5c.008 0 .015.007.015.015ZM10 6a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1H7a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1V7a1 1 0 0 0-1-1h-1Z" />
    </g>
    <defs>
      <clipPath id="zoom-in_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgZoomIn;
