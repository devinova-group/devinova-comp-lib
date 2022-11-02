import * as React from "react";
import { SVGProps } from "react";

const SvgVerticalAlignTop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M0 2v3h24V2H0Zm.27 6C.09 8 0 8.12 0 8.27V22.7c0 .15.12.27.27.27H5.7c.15 0 .27-.12.27-.27V8.27c0-.18-.12-.27-.27-.27H.27Zm9 0c-.18 0-.27.12-.27.27v8.43c0 .15.12.27.27.27h5.43c.15 0 .27-.12.27-.27V8.27c0-.18-.12-.27-.27-.27H9.27Zm9 0c-.15 0-.27.12-.27.27V22.7c0 .15.12.27.27.27h5.43c.15 0 .27-.12.27-.27V8.27c0-.18-.12-.27-.27-.27h-5.43Z" />
  </svg>
);

export default SvgVerticalAlignTop;
