import * as React from "react";
import { SVGProps } from "react";

const SvgBell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#bell_svg__a)">
      <path d="M12 0C8.7 0 6 2.7 6 6c0 3.12-1.56 5.94-4.02 7.98a5.574 5.574 0 0 0-1.576 2.075C-.032 17.07.895 18 2 18h20c1.105 0 2.036-.93 1.605-1.947a5.379 5.379 0 0 0-1.585-2.073C19.56 11.94 18 9.12 18 6c0-3.3-2.67-6-6-6Zm-1 21c-1.105 0-2.04.987-1.354 1.854A3 3 0 0 0 12 24c.952 0 1.804-.45 2.354-1.146C15.04 21.987 14.104 21 13 21h-2Z" />
    </g>
    <defs>
      <clipPath id="bell_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgBell;
