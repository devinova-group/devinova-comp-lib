import * as React from "react";
import { SVGProps } from "react";

const SvgTag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#tag_svg__a)">
      <path d="M2 0a2 2 0 0 0-2 2v6.172a2 2 0 0 0 .586 1.414l13 13a2 2 0 0 0 2.828 0l6.172-6.172a2 2 0 0 0 0-2.828l-13-13A2 2 0 0 0 8.172 0H2Zm4 3c1.65 0 3 1.35 3 3S7.65 9 6 9 3 7.65 3 6s1.35-3 3-3Z" />
    </g>
    <defs>
      <clipPath id="tag_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTag;
