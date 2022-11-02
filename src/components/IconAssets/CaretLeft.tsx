import * as React from "react";
import { SVGProps } from "react";

const SvgCaretLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M18 4.828c0-1.781-2.154-2.674-3.414-1.414l-7.172 7.172a2 2 0 0 0 0 2.828l7.172 7.172c1.26 1.26 3.414.367 3.414-1.414V4.828Z" />
  </svg>
);

export default SvgCaretLeft;
