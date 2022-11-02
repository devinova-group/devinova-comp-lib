import * as React from "react";
import { SVGProps } from "react";

const SvgCaretTop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M12.707 6.707a1 1 0 0 0-1.414 0l-9.586 9.586c-.63.63-.184 1.707.707 1.707h19.172c.89 0 1.337-1.077.707-1.707l-9.586-9.586Z" />
  </svg>
);

export default SvgCaretTop;
