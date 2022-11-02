import * as React from "react";
import { SVGProps } from "react";

const SvgVolumeHigh = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#volume-high_svg__a)">
      <path d="M10.02 0 6 6H0v12h6l4.02 6H12V0h-1.98ZM15 3v3c.51 0 1.02.06 1.5.18 2.58.66 4.5 3 4.5 5.82 0 2.82-1.89 5.16-4.5 5.82-.48.12-.99.18-1.5.18v3c.75 0 1.44-.12 2.16-.27h.09C21.15 19.74 24 16.2 24 12s-2.85-7.74-6.75-8.73C16.56 3.09 15.78 3 15 3Zm0 6v6c.27 0 .54-.03.75-.09A3.024 3.024 0 0 0 18 12c0-1.38-.93-2.58-2.25-2.91-.24-.06-.51-.09-.75-.09Z" />
    </g>
    <defs>
      <clipPath id="volume-high_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgVolumeHigh;
