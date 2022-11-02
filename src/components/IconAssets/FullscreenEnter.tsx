import * as React from "react";
import { SVGProps } from "react";

const SvgFullscreenEnter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#fullscreen-enter_svg__a)">
      <path d="M1 0a1 1 0 0 0-1 1v8.586c0 .89 1.077 1.337 1.707.707l2.086-2.086a1 1 0 0 1 1.414 0l3.086 3.086a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414L8.207 5.207a1 1 0 0 1 0-1.414l2.086-2.086c.63-.63.184-1.707-.707-1.707H1Zm14.707 12.707a1 1 0 0 0-1.414 0l-1.586 1.586a1 1 0 0 0 0 1.414l3.086 3.086a1 1 0 0 1 0 1.414l-2.086 2.086c-.63.63-.184 1.707.707 1.707H23a1 1 0 0 0 1-1v-8.586c0-.89-1.077-1.337-1.707-.707l-2.086 2.086a1 1 0 0 1-1.414 0l-3.086-3.086Z" />
    </g>
    <defs>
      <clipPath id="fullscreen-enter_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFullscreenEnter;
