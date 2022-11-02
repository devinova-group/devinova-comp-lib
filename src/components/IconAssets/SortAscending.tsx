import * as React from "react";
import { SVGProps } from "react";

const SvgSortAscending = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#sort-ascending_svg__a)">
      <path d="M7 0a1 1 0 0 0-1 1v16a1 1 0 0 1-1 1H2.85c-.945 0-1.362 1.19-.624 1.78l4.65 3.72a1 1 0 0 0 1.249 0l4.649-3.72c.738-.59.32-1.78-.625-1.78H10a1 1 0 0 1-1-1V1a1 1 0 0 0-1-1H7Zm6 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-4Zm0 6a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-7Zm0 6a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H13Z" />
    </g>
    <defs>
      <clipPath id="sort-ascending_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSortAscending;
