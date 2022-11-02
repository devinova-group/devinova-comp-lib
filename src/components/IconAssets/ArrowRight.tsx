import * as React from "react";
import { SVGProps } from "react";

const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M16.636 4.347A1 1 0 0 0 15 5.119V8a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h13a1 1 0 0 1 1 1v2.848a1 1 0 0 0 1.645.765l6.438-5.43a1 1 0 0 0-.01-1.536l-6.437-5.3Z" />
  </svg>
);

export default SvgArrowRight;
