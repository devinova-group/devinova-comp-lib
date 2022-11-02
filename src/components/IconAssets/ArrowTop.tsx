import * as React from "react";
import { SVGProps } from "react";

const SvgArrowTop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M13.184.917a1 1 0 0 0-1.537.01l-5.3 6.437A1 1 0 0 0 7.119 9H10a1 1 0 0 1 1 1v13a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V10a1 1 0 0 1 1-1h2.849a1 1 0 0 0 .764-1.645L13.183.917Z" />
  </svg>
);

export default SvgArrowTop;
