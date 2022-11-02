import * as React from "react";
import { SVGProps } from "react";

const SvgChat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M1 0a1 1 0 0 0-1 1v11.586c0 .89 1.077 1.337 1.707.707l1-1A1 1 0 0 1 3.414 12H5a1 1 0 0 0 1-1V4a1 1 0 0 1 1-1h7a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1Zm9 6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10.586a1 1 0 0 1 .707.293l1 1c.63.63 1.707.184 1.707-.707V7a1 1 0 0 0-1-1H10Z" />
  </svg>
);

export default SvgChat;
