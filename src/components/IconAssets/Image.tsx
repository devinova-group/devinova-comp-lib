import * as React from "react";
import { SVGProps } from "react";

const SvgImage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#image_svg__a)">
      <path d="M1 0a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1Zm2 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v5.586c0 .89-1.077 1.337-1.707.707l-.586-.586a1 1 0 0 0-1.414 0l-1.586 1.586a1 1 0 0 0 0 1.414l5 5a1 1 0 0 1 .293.707V20a1 1 0 0 1-1 1h-1.586a1 1 0 0 1-.707-.293l-11-11a1 1 0 0 0-1.414 0l-.586.586c-.63.63-1.707.184-1.707-.707V4Z" />
    </g>
    <defs>
      <clipPath id="image_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgImage;
