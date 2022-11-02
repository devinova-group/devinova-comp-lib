import * as React from "react";
import { SVGProps } from "react";

const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M1.03 0v6h21V0h-21Zm0 9v14.73c0 .15.12.27.27.27h20.43c.15 0 .27-.12.27-.27V9H1h.03Zm3 3h3v3h-3v-3Zm6 0h3v3h-3v-3Zm6 0h3v3h-3v-3Zm-12 6h3v3h-3v-3Zm6 0h3v3h-3v-3Z" />
  </svg>
);

export default SvgCalendar;
