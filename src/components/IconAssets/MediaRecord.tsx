import * as React from "react";
import { SVGProps } from "react";

const SvgMediaRecord = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M12 3c-4.98 0-9 4.02-9 9s4.02 9 9 9 9-4.02 9-9-4.02-9-9-9Z" />
  </svg>
);

export default SvgMediaRecord;
