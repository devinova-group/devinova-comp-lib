import * as React from "react";
import { SVGProps } from "react";

const SvgHardDrive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#hard-drive_svg__a)">
      <path d="M1.57 0C1.24 0 1 .24 1 .57v9.93c0 .84.66 1.5 1.5 1.5h18c.84 0 1.5-.66 1.5-1.5V.57c0-.33-.24-.57-.57-.57H1.54h.03Zm-.544 14.73a.026.026 0 0 0-.026.026v8.704c0 .33.24.57.57.57h19.89c.33 0 .57-.24.57-.57v-7.197c0-.742-.758-1.263-1.5-1.263h-18c-.539 0-1.017-.12-1.496-.269a.026.026 0 0 0-.008-.001ZM17.5 18c.84 0 1.5.66 1.5 1.5s-.66 1.5-1.5 1.5-1.5-.66-1.5-1.5.66-1.5 1.5-1.5Z" />
    </g>
    <defs>
      <clipPath id="hard-drive_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgHardDrive;
