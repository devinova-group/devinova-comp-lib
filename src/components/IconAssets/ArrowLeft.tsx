import * as React from "react";
import { SVGProps } from "react";

const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M9 5.151a1 1 0 0 0-1.645-.764L.917 9.817a1 1 0 0 0 .01 1.536l6.437 5.3A1 1 0 0 0 9 15.881V13a1 1 0 0 1 1-1h13a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H10a1 1 0 0 1-1-1V5.151Z" />
  </svg>
);

export default SvgArrowLeft;
