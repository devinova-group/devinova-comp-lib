import * as React from "react";
import { SVGProps } from "react";

const SvgCompass = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#compass_svg__a)">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0Zm0 3c4.98 0 9 4.02 9 9s-4.02 9-9 9-9-4.02-9-9 4.02-9 9-9Zm5.367 4.897a1 1 0 0 0-1.264-1.265l-6.629 2.21a1 1 0 0 0-.632.632l-2.21 6.629a1 1 0 0 0 1.265 1.264l6.629-2.209a1 1 0 0 0 .632-.632l2.21-6.629ZM12 10.5c.84 0 1.5.66 1.5 1.5s-.66 1.5-1.5 1.5-1.5-.66-1.5-1.5.66-1.5 1.5-1.5Z" />
    </g>
    <defs>
      <clipPath id="compass_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCompass;
