import * as React from "react";
import { SVGProps } from "react";

const SvgBriefcase = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#briefcase_svg__a)">
      <path d="M9 0C7.35 0 6 1.35 6 3v2a1 1 0 0 1-1 1H.27C.09 6 0 6.12 0 6.27v7.23c0 .84.66 1.5 1.5 1.5h21c.84 0 1.5-.66 1.5-1.5V6.27c0-.18-.12-.27-.27-.27H19a1 1 0 0 1-1-1V3c0-1.65-1.35-3-3-3H9Zm0 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V4ZM-.004 17.73c.002 0 .004.002.004.004v5.996c0 .15.12.27.27.27H23.7c.15 0 .27-.12.27-.27v-4.557c0-.698-.712-1.187-1.41-1.174l-.09.001h-21c-.53 0-1.003-.116-1.475-.262-.004-.002-.003-.008.001-.008Z" />
    </g>
    <defs>
      <clipPath id="briefcase_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgBriefcase;
