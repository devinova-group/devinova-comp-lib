import * as React from "react";
import { SVGProps } from "react";

const SvgCopywriting = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#copywriting_svg__a)">
      <path d="M1.5 0a1.5 1.5 0 1 0 0 3h21a1.5 1.5 0 0 0 0-3h-21Zm0 6a1.5 1.5 0 1 0 0 3h12a1.5 1.5 0 0 0 0-3h-12Zm0 9a1.5 1.5 0 0 0 0 3h21a1.5 1.5 0 0 0 0-3h-21Zm0 6a1.5 1.5 0 0 0 0 3h15a1.5 1.5 0 0 0 0-3h-15Zm21 0c-.84 0-1.5.66-1.5 1.5s.66 1.5 1.5 1.5 1.5-.66 1.5-1.5-.66-1.5-1.5-1.5Z" />
    </g>
    <defs>
      <clipPath id="copywriting_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCopywriting;
