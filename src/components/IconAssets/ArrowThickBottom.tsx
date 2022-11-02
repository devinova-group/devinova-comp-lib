import * as React from "react";
import { SVGProps } from "react";

const SvgArrowThickBottom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M10 0a1 1 0 0 0-1 1v13a1 1 0 0 1-1 1H5.431c-.893 0-1.338 1.082-.703 1.71l6.651 6.586a1 1 0 0 0 1.415-.007l6.52-6.586c.625-.63.177-1.703-.711-1.703H16a1 1 0 0 1-1-1V1a1 1 0 0 0-1-1h-4Z" />
  </svg>
);

export default SvgArrowThickBottom;
