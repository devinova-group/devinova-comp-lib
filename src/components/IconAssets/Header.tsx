import * as React from "react";
import { SVGProps } from "react";

const SvgHeader = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M3 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h.5C4.34 3 5 3.66 5 4.5v12c0 .84-.66 1.5-1.5 1.5H3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-.5c-.84 0-1.5-.66-1.5-1.5V13a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v3.5c0 .84-.66 1.5-1.5 1.5H15a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-.5c-.84 0-1.5-.66-1.5-1.5v-12c0-.84.66-1.5 1.5-1.5h.5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h.5c.84 0 1.5.66 1.5 1.5V8a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V4.5C8 3.66 8.66 3 9.5 3h.5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H3Z" />
  </svg>
);

export default SvgHeader;
