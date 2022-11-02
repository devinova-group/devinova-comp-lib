import * as React from "react";
import { SVGProps } from "react";

const SvgTerminal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#terminal_svg__a)">
      <path d="M.27 0C.09 0 0 .12 0 .27V23.7c0 .15.12.27.27.27H23.7c.15 0 .27-.12.27-.27V.27c0-.18-.12-.27-.27-.27H.27Zm3.523 3.047a1 1 0 0 1 1.414 0l3.746 3.746a1 1 0 0 1 0 1.414l-3.746 3.746a1 1 0 0 1-1.414 0l-.746-.746a1 1 0 0 1 0-1.414l1.586-1.586a1 1 0 0 0 0-1.414L3.047 5.207a1 1 0 0 1 0-1.414l.746-.746ZM12 10a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-1Z" />
    </g>
    <defs>
      <clipPath id="terminal_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTerminal;
