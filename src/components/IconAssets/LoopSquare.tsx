import * as React from "react";
import { SVGProps } from "react";

const SvgLoopSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#loop-square_svg__a)">
      <path d="M4 0a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-.234a1 1 0 0 0-.857 1.514l2.733 4.557a1 1 0 0 0 1.716 0l2.733-4.556A1 1 0 0 0 22.234 9H22a1 1 0 0 1-1-1V1a1 1 0 0 0-1-1H4Zm1.357 8.93a1 1 0 0 0-1.714 0L.909 13.485A1 1 0 0 0 1.766 15H2a1 1 0 0 1 1 1v7a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h.234a1 1 0 0 0 .857-1.514L5.357 8.928Z" />
    </g>
    <defs>
      <clipPath id="loop-square_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgLoopSquare;
