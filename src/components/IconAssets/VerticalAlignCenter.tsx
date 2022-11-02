import * as React from "react";
import { SVGProps } from "react";

const SvgVerticalAlignCenter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#vertical-align-center_svg__a)">
      <path d="M.27 2C.09 2 0 2.12 0 2.27V8h6V2.27C6 2.09 5.88 2 5.73 2H.27Zm18 0c-.15 0-.27.12-.27.27V8h6V2.27c0-.18-.12-.27-.27-.27h-5.46Zm-9 3c-.18 0-.27.12-.27.27V8h6V5.27c0-.15-.12-.27-.27-.27H9.27ZM0 11v3h24v-3H0Zm0 6v5.73c0 .15.12.27.27.27H5.7c.15 0 .27-.12.27-.27V17h-6H0Zm9 0v2.73c0 .15.12.27.27.27h5.43c.15 0 .27-.12.27-.27V17h-6H9Zm9 0v5.73c0 .15.12.27.27.27h5.43c.15 0 .27-.12.27-.27V17h-6H18Z" />
    </g>
    <defs>
      <clipPath id="vertical-align-center_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgVerticalAlignCenter;
