import * as React from "react";
import { SVGProps } from "react";

const SvgWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#warning_svg__a)">
      <path d="M11.24 0c.013 0 .017.019.005.024-.09.042-.269.136-.335.246L2.09 20.7c-.06.15-.09.39-.09.57v2.43c0 .15.12.27.27.27H22.7c.15 0 .27-.12.27-.27v-2.43c0-.15-.03-.42-.09-.57L14.06.27a.427.427 0 0 0-.39-.27h-2.43Zm-.21 10.5a1.5 1.5 0 1 1 3 0v3a1.5 1.5 0 0 1-3 0v-3Zm0 9a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
    </g>
    <defs>
      <clipPath id="warning_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgWarning;
