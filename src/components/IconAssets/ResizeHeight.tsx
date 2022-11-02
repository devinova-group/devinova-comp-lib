import * as React from "react";
import { SVGProps } from "react";

const SvgResizeHeight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M13.268.922a1 1 0 0 0-1.536 0L6.367 7.36A1 1 0 0 0 7.135 9H10a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7.135a1 1 0 0 0-.768 1.64l5.365 6.438a1 1 0 0 0 1.536 0l5.365-6.438a1 1 0 0 0-.768-1.64H15a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2.865a1 1 0 0 0 .768-1.64L13.268.922Z" />
  </svg>
);

export default SvgResizeHeight;
