import * as React from "react";
import { SVGProps } from "react";

const SvgBatteryFull = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M.27 2.985A.015.015 0 0 1 .255 3c-.17.007-.255.124-.255.27V20.7c0 .15.12.27.27.27H20.7c.15 0 .27-.12.27-.27v-4.73a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1V3.24c0-.18-.12-.27-.27-.27H.285a.015.015 0 0 0-.015.015Z" />
  </svg>
);

export default SvgBatteryFull;
