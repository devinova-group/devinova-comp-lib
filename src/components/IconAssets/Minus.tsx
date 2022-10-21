import * as React from "react";
import { SVGProps } from "react";

const SvgMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M1 9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H1Z" />
  </svg>
);

export default SvgMinus;
