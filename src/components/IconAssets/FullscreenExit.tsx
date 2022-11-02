import * as React from "react";
import { SVGProps } from "react";

const SvgFullscreenExit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#fullscreen-exit_svg__a)">
      <path d="M3.707.707a1 1 0 0 0-1.414 0L.707 2.293a1 1 0 0 0 0 1.414l3.086 3.086a1 1 0 0 1 0 1.414l-2.086 2.086c-.63.63-.184 1.707.707 1.707H11a1 1 0 0 0 1-1V2.414c0-.89-1.077-1.337-1.707-.707L8.207 3.793a1 1 0 0 1-1.414 0L3.707.707ZM13 12a1 1 0 0 0-1 1v8.586c0 .89 1.077 1.337 1.707.707l2.086-2.086a1 1 0 0 1 1.414 0l3.086 3.086a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.086-3.086a1 1 0 0 1 0-1.414l2.086-2.086c.63-.63.184-1.707-.707-1.707H13Z" />
    </g>
    <defs>
      <clipPath id="fullscreen-exit_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFullscreenExit;
