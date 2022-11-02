import * as React from "react";
import { SVGProps } from "react";

const SvgResizeBoth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#resize-both_svg__a)">
      <path d="M14.414 0c-.89 0-1.337 1.077-.707 1.707l2.566 2.566a1 1 0 0 1 0 1.414L5.687 16.273a1 1 0 0 1-1.414 0l-2.566-2.566c-.63-.63-1.707-.184-1.707.707V23a1 1 0 0 0 1 1h8.586c.89 0 1.337-1.077.707-1.707l-2.566-2.566a1 1 0 0 1 0-1.414L18.313 7.727a1 1 0 0 1 1.414 0l2.566 2.566c.63.63 1.707.184 1.707-.707V1a1 1 0 0 0-1-1h-8.586Z" />
    </g>
    <defs>
      <clipPath id="resize-both_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgResizeBoth;
