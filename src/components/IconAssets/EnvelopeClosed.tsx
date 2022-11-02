import * as React from "react";
import { SVGProps } from "react";

const SvgEnvelopeClosed = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M1 3a1 1 0 0 0-1 1v1.382a1 1 0 0 0 .553.894l11 5.5a1 1 0 0 0 .894 0l11-5.5A1 1 0 0 0 24 5.382V4a1 1 0 0 0-1-1H1Zm.447 6.724A1 1 0 0 0 0 10.618V20a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-9.382a1 1 0 0 0-1.447-.894l-10.106 5.052a1 1 0 0 1-.894 0L1.447 9.724Z" />
  </svg>
);

export default SvgEnvelopeClosed;
