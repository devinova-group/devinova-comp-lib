import * as React from "react";
import { SVGProps } from "react";

const SvgCrop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#crop_svg__a)">
      <path d="M4 0a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v13a1 1 0 0 0 1 1h13a1 1 0 0 1 1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1V4.914a1 1 0 0 1 .293-.707l2-2a1 1 0 0 0 0-1.414l-.086-.086a1 1 0 0 0-1.414 0l-2 2a1 1 0 0 1-.707.293H7a1 1 0 0 1-1-1V1a1 1 0 0 0-1-1H4Zm2 7a1 1 0 0 1 1-1h7.086c.89 0 1.337 1.077.707 1.707l-7.086 7.086c-.63.63-1.707.184-1.707-.707V7Zm10.293 2.207c.63-.63 1.707-.184 1.707.707V17a1 1 0 0 1-1 1H9.914c-.89 0-1.337-1.077-.707-1.707l7.086-7.086Z" />
    </g>
    <defs>
      <clipPath id="crop_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCrop;
