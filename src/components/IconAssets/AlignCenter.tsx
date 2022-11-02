import * as React from "react";
import { SVGProps } from "react";

const SvgAlignCenter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M1.5 2a1.5 1.5 0 1 0 0 3h21a1.5 1.5 0 0 0 0-3h-21Zm3 6a1.5 1.5 0 0 0 0 3h15a1.5 1.5 0 0 0 0-3h-15Zm-3 6a1.5 1.5 0 0 0 0 3h21a1.5 1.5 0 0 0 0-3h-21Zm3 6a1.5 1.5 0 0 0 0 3h15a1.5 1.5 0 0 0 0-3h-15Z" />
  </svg>
);

export default SvgAlignCenter;
