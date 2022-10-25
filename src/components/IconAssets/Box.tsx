import * as React from "react";
import { SVGProps } from "react";

const SvgBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#box_svg__a)">
      <path d="M1.5 0a1.5 1.5 0 1 0 0 3h21a1.5 1.5 0 0 0 0-3h-21ZM-.03 6a.03.03 0 0 1 .03.03v17.7c0 .15.12.27.27.27H23.7c.15 0 .27-.12.27-.27V8a2 2 0 0 0-2-2h-5.365c-.853 0-1.545.692-1.545 1.545s-.692 1.545-1.545 1.545h-3A1.545 1.545 0 0 1 8.97 7.545C8.97 6.692 8.278 6 7.425 6H-.03Z" />
    </g>
    <defs>
      <clipPath id="box_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgBox;
