import * as React from "react";
import { SVGProps } from "react";

const SvgChevronBottom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M5.207 3.707a1 1 0 0 0-1.414 0L.707 6.793a1 1 0 0 0 0 1.414l10.586 10.586a1 1 0 0 0 1.414 0L23.293 8.207a1 1 0 0 0 0-1.414l-3.086-3.086a1 1 0 0 0-1.414 0l-6.086 6.086a1 1 0 0 1-1.414 0L5.207 3.707Z" />
  </svg>
);

export default SvgChevronBottom;
