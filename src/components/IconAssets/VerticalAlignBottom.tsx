import * as React from "react";
import { SVGProps } from "react";

const SvgVerticalAlignBottom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M.27 2C.09 2 0 2.12 0 2.27V16.7c0 .15.12.27.27.27H5.7c.15 0 .27-.12.27-.27V2.27c0-.18-.12-.27-.27-.27H.27Zm18 0c-.15 0-.27.12-.27.27V16.7c0 .15.12.27.27.27h5.43c.15 0 .27-.12.27-.27V2.27c0-.18-.12-.27-.27-.27h-5.43Zm-9 6c-.18 0-.27.12-.27.27v8.43c0 .15.12.27.27.27h5.43c.15 0 .27-.12.27-.27V8.27c0-.18-.12-.27-.27-.27H9.27ZM1.5 20a1.5 1.5 0 0 0 0 3h21a1.5 1.5 0 0 0 0-3h-21Z" />
  </svg>
);

export default SvgVerticalAlignBottom;
