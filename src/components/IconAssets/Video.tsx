import * as React from "react";
import { SVGProps } from "react";

const SvgVideo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M1.5 5C.66 5 0 5.69 0 6.5v12c0 .84.69 1.5 1.5 1.5h15c.84 0 1.5-.66 1.5-1.5v-2.086c0-.89 1.077-1.337 1.707-.707l1 1a1 1 0 0 0 .707.293H23a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-1.586a1 1 0 0 0-.707.293l-1 1c-.63.63-1.707.184-1.707-.707V6.5c0-.84-.66-1.5-1.5-1.5h-15Z" />
  </svg>
);

export default SvgVideo;
