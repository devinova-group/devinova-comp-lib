import * as React from "react";
import { SVGProps } from "react";

const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M7 0a1 1 0 0 0-1 1v20.586c0 .89 1.077 1.337 1.707.707l3.586-3.586a1 1 0 0 1 1.414 0l3.586 3.586c.63.63 1.707.184 1.707-.707V1a1 1 0 0 0-1-1H7Z" />
  </svg>
);

export default SvgBookmark
