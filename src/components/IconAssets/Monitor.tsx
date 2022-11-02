import * as React from "react";
import { SVGProps } from "react";

const SvgMonitor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#monitor_svg__a)">
      <path d="M1.05 0c-.02 0-.04.003-.058.01A1.5 1.5 0 0 0 0 1.5v15A1.5 1.5 0 0 0 1.5 18h6a1.5 1.5 0 1 1 0 3H6c-.952 0-1.804.45-2.355 1.146C2.961 23.013 3.895 24 5 24h14c1.104 0 2.039-.987 1.354-1.854A2.999 2.999 0 0 0 18 21h-1.5a1.5 1.5 0 0 1 0-3h6a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 22.5 0h-21a1.5 1.5 0 0 0-.12-.006A5.968 5.968 0 0 0 1.05 0ZM3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Z" />
    </g>
    <defs>
      <clipPath id="monitor_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgMonitor;
