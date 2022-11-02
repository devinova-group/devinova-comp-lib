import * as React from "react";
import { SVGProps } from "react";

const SvgArrowThickRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M16.703 4.687c-.63-.626-1.703-.178-1.703.71V8a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h13a1 1 0 0 1 1 1v2.569c0 .893 1.082 1.338 1.71.703l6.586-6.651a1 1 0 0 0-.007-1.415l-6.586-6.52Z" />
  </svg>
);

export default SvgArrowThickRight;
