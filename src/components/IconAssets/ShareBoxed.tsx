import * as React from "react";
import { SVGProps } from "react";

const SvgShareBoxed = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#share-boxed_svg__a)">
      <path d="M2.25 0C1.02 0 0 1.02 0 2.25v16.5C0 19.98 1.02 21 2.25 21h13.5c1.23 0 2.25-1.02 2.25-2.25V16a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H2.25ZM18 0v2c0 .552-.45.996-1 1.041-5.68.47-10.14 4.906-10.82 10.549A5.958 5.958 0 0 1 12 9h5.121c.486 0 .879.393.879.879 0 .783.947 1.175 1.5.621l3.793-3.793a1 1 0 0 0 0-1.414L18 0Z" />
    </g>
    <defs>
      <clipPath id="share-boxed_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgShareBoxed;
