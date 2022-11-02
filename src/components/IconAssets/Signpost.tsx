import * as React from "react";
import { SVGProps } from "react";

const SvgSignpost = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M12 0a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1H5.414a1 1 0 0 0-.707.293l-2 2a1 1 0 0 0 0 1.414l2 2A1 1 0 0 0 5.414 9H10a1 1 0 0 1 1 1v13a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V13a1 1 0 0 1 1-1h4.586a1 1 0 0 0 .707-.293l2-2a1 1 0 0 0 0-1.414l-2-2A1 1 0 0 0 19.586 6H15a1 1 0 0 1-1-1V1a1 1 0 0 0-1-1h-1Z" />
  </svg>
);

export default SvgSignpost;
