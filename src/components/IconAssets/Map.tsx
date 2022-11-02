import * as React from "react";
import { SVGProps } from "react";

const SvgMap = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#map_svg__a)">
      <path d="M0 0v22a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4.918c0-.148.022-.295.033-.442a1.493 1.493 0 0 0 0-.22c-.011-.148-.033-.295-.033-.443V1.97a2 2 0 0 0-2-2H.03A.03.03 0 0 0 0 0Zm3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1.503 1.503 0 0 0-1.291.534A1.506 1.506 0 0 0 16.5 18h3a1.5 1.5 0 1 1 0 3H5a2 2 0 0 1-2-2V5Zm7.5 1C8.01 6 6 8.01 6 10.5c0 1.915 1.834 4.441 3.16 6.018a1.733 1.733 0 0 0 2.68 0C13.166 14.941 15 12.415 15 10.5 15 8.01 12.99 6 10.5 6Zm0 3c.84 0 1.5.66 1.5 1.5s-.66 1.5-1.5 1.5S9 11.34 9 10.5 9.66 9 10.5 9Z" />
    </g>
    <defs>
      <clipPath id="map_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgMap;
