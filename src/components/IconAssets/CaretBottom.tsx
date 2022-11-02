import * as React from "react";
import { SVGProps } from "react";

const SvgCaretBottom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M4.828 6C3.047 6 2.154 8.154 3.414 9.414l7.172 7.172a2 2 0 0 0 2.828 0l7.172-7.172C21.846 8.154 20.953 6 19.172 6H4.828Z" />
  </svg>
);

export default SvgCaretBottom;
