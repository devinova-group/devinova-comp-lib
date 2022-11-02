import * as React from "react";
import { SVGProps } from "react";

const SvgFolder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#folder_svg__a)">
      <path d="M1 0a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H10a1 1 0 0 1-1-1V1a1 1 0 0 0-1-1H1Zm0 9a1 1 0 0 0-1 1v12.5c0 .84.66 1.5 1.5 1.5h21c.84 0 1.5-.66 1.5-1.5V10a1 1 0 0 0-1-1H1Z" />
    </g>
    <defs>
      <clipPath id="folder_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFolder;
