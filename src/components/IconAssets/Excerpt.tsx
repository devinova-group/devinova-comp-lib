import * as React from "react";
import { SVGProps } from "react";

const SvgExcerpt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M1.5 2a1.5 1.5 0 1 0 0 3h18a1.5 1.5 0 0 0 0-3h-18Zm0 6a1.5 1.5 0 0 0 0 3h12a1.5 1.5 0 0 0 0-3h-12Zm0 6a1.5 1.5 0 0 0 0 3h21a1.5 1.5 0 0 0 0-3h-21Zm0 6a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3Zm6 0a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3Zm6 0a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3Z" />
  </svg>
);

export default SvgExcerpt;
