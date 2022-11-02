import * as React from "react";
import { SVGProps } from "react";

const SvgDocument = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M3 0a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h19a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1H12a1 1 0 0 1-1-1V1a1 1 0 0 0-1-1H3Zm12.707 1.707c-.63-.63-1.707-.184-1.707.707V8a1 1 0 0 0 1 1h5.586c.89 0 1.337-1.077.707-1.707l-5.586-5.586ZM5 7a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7Zm0 6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1Zm0 6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1Z" />
  </svg>
);

export default SvgDocument;
