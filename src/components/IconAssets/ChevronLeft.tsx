import * as React from "react";
import { SVGProps } from "react";

const SvgChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M17.414 1.414a2 2 0 0 0-2.828 0l-9.172 9.172a2 2 0 0 0 0 2.828l9.172 9.172a2 2 0 0 0 2.828 0l1.672-1.672a2 2 0 0 0 0-2.828l-4.672-4.672a2 2 0 0 1 0-2.828l4.672-4.672a2 2 0 0 0 0-2.828l-1.672-1.672Z" />
  </svg>
);

export default SvgChevronLeft;
