import * as React from "react";
import { SVGProps } from "react";

const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M9.914 1.414a2 2 0 0 0-2.828 0L5.414 3.086a2 2 0 0 0 0 2.828l4.672 4.672a2 2 0 0 1 0 2.828l-4.672 4.672a2 2 0 0 0 0 2.828l1.672 1.672a2 2 0 0 0 2.828 0l9.172-9.172a2 2 0 0 0 0-2.828L9.914 1.414Z" />
  </svg>
);

export default SvgChevronRight;
