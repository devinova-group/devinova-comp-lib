import * as React from "react";
import { SVGProps } from "react";

const SvgKey = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#key_svg__a)">
      <path d="M16.5 0C12.36 0 9 3.36 9 7.5c0 .296 0 .591.021.88.024.333-.073.672-.31.908l-8.418 8.42a1 1 0 0 0-.293.706V23a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 0 1-1v-1.944c0-.036.014-.07.04-.095a.137.137 0 0 1 .12-.038c.43.077.885.077 1.34.077 4.14 0 7.5-3.36 7.5-7.5C24 3.36 20.64 0 16.5 0ZM18 3c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3Z" />
    </g>
    <defs>
      <clipPath id="key_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgKey;
