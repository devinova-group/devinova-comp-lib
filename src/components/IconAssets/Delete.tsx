import * as React from "react";
import { SVGProps } from "react";

const SvgDelete = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M6.535 3a1 1 0 0 0-.832.445l-5.333 8a1 1 0 0 0 0 1.11l5.333 8a1 1 0 0 0 .832.445H23a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6.535Zm3.258 3.047a1 1 0 0 1 1.414 0l3.086 3.086a1 1 0 0 0 1.414 0l3.086-3.086a1 1 0 0 1 1.414 0l.746.746a1 1 0 0 1 0 1.414l-3.086 3.086a1 1 0 0 0 0 1.414l3.086 3.086a1 1 0 0 1 0 1.414l-.746.746a1 1 0 0 1-1.414 0l-3.086-3.086a1 1 0 0 0-1.414 0l-3.086 3.086a1 1 0 0 1-1.414 0l-.746-.746a1 1 0 0 1 0-1.414l3.086-3.086a1 1 0 0 0 0-1.414L9.047 8.207a1 1 0 0 1 0-1.414l.746-.746Z" />
  </svg>
);

export default SvgDelete;
