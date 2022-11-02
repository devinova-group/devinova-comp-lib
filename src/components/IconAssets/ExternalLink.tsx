import * as React from "react";
import { SVGProps } from "react";

const SvgExternalLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#external-link_svg__a)">
      <path d="M1 0a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1Zm13.414 0c-.89 0-1.337 1.077-.707 1.707l2.086 2.086a1 1 0 0 1 0 1.414l-6.086 6.086a1 1 0 0 0 0 1.414l1.586 1.586a1 1 0 0 0 1.414 0l6.086-6.086a1 1 0 0 1 1.414 0l2.086 2.086c.63.63 1.707.184 1.707-.707V1a1 1 0 0 0-1-1h-8.586Z" />
    </g>
    <defs>
      <clipPath id="external-link_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgExternalLink;
