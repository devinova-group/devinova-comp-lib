import * as React from "react";
import { SVGProps } from "react";

const SvgLoop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M19.6 3.2A1 1 0 0 0 18 4a1 1 0 0 1-1 1H3C1.35 5 0 6.35 0 8v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 1 1 0 0 0 1.6.8l3.333-2.5a1 1 0 0 0 0-1.6L19.6 3.2ZM6 16a1 1 0 0 0-1.6-.8l-3.333 2.5a1 1 0 0 0 0 1.6L4.4 21.8A1 1 0 0 0 6 21a1 1 0 0 1 1-1h14c1.65 0 3-1.35 3-3v-2a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1Z" />
  </svg>
);

export default SvgLoop;
