import * as React from "react";
import { SVGProps } from "react";

const SvgElevator = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M12.707.707a1 1 0 0 0-1.414 0L4.707 7.293C4.077 7.923 4.523 9 5.414 9h13.172c.89 0 1.337-1.077.707-1.707L12.707.707ZM5.414 15c-.89 0-1.337 1.077-.707 1.707l6.586 6.586a1 1 0 0 0 1.414 0l6.586-6.586c.63-.63.184-1.707-.707-1.707H5.414Z" />
  </svg>
);

export default SvgElevator;
