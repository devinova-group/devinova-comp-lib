import * as React from "react";
import { SVGProps } from "react";

const SvgUnderline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M6 0a1 1 0 0 0-1 1v11c0 3.3 3.36 6 7.5 6H14c3.3 0 6-2.7 6-6V1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v11c0 1.65-1.35 3-3 3s-3-1.35-3-3V1a1 1 0 0 0-1-1H6ZM3 21a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h19a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H3Z" />
  </svg>
);

export default SvgUnderline;
