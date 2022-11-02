import * as React from "react";
import { SVGProps } from "react";

const SvgInfinity = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M6 6c-3.93 0-6 3.03-6 6s2.07 6 6 6c2.37 0 4.26-1.68 6-3.66 1.74 1.98 3.57 3.66 6 3.66 3.93 0 6-3.03 6-6s-2.07-6-6-6c-2.43 0-4.26 1.68-6 3.66C10.26 7.68 8.37 6 6 6Zm0 3c1.26 0 2.64 1.41 4.02 3-1.38 1.59-2.76 3-4.02 3-2.22 0-3-1.62-3-3s.78-3 3-3Zm12 0c2.22 0 3 1.62 3 3s-.78 3-3 3c-1.29 0-2.67-1.41-4.02-3 1.38-1.59 2.73-3 4.02-3Z" />
  </svg>
);

export default SvgInfinity;
