import * as React from "react";
import { SVGProps } from "react";

const SvgCaretRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M9.414 3.414C8.154 2.154 6 3.047 6 4.828v14.344c0 1.781 2.154 2.674 3.414 1.414l7.172-7.172a2 2 0 0 0 0-2.828L9.414 3.414Z" />
  </svg>
);

export default SvgCaretRight;
