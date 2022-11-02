import * as React from "react";
import { SVGProps } from "react";

const SvgChevronTop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M12.707 3.707a1 1 0 0 0-1.414 0L.707 14.293a1 1 0 0 0 0 1.414l3.086 3.086a1 1 0 0 0 1.414 0l6.086-6.086a1 1 0 0 1 1.414 0l6.086 6.086a1 1 0 0 0 1.414 0l3.086-3.086a1 1 0 0 0 0-1.414L12.707 3.707Z" />
  </svg>
);

export default SvgChevronTop;
