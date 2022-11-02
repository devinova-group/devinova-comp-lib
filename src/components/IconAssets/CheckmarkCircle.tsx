import * as React from "react";
import { SVGProps } from "react";

const SvgCheckmarkCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <circle cx={12} cy={12} r={12} />
    <path d="M17.741 6.582a1 1 0 0 0-1.422.023l-.594.62-4.519 4.519a1 1 0 0 1-1.4.013l-.812-.782-.643-.643a1 1 0 0 0-1.414 0l-1.23 1.23a1 1 0 0 0 0 1.414l.643.643 2.813 2.812.586.613a1 1 0 0 0 1.43.015l.627-.628L18.37 9.87l.635-.636a1 1 0 0 0-.007-1.421l-1.256-1.23Z" />
  </svg>
);

export default SvgCheckmarkCircle;
