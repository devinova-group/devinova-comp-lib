import * as React from "react";
import { SVGProps } from "react";

const SvgInbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#inbox_svg__a)">
      <path d="M.57 0C.24 0 0 .24 0 .57v22.89c0 .33.24.57.57.57h22.89c.33 0 .57-.24.57-.57V.57c0-.33-.24-.57-.57-.57H.57ZM3 7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1.586a1 1 0 0 0-.707.293l-2.414 2.414a1 1 0 0 1-.707.293H9.414a1 1 0 0 1-.707-.293l-2.414-2.414A1 1 0 0 0 5.586 15H4a1 1 0 0 1-1-1V7Z" />
    </g>
    <defs>
      <clipPath id="inbox_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgInbox;
