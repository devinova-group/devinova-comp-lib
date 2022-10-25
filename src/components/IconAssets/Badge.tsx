import * as React from "react";
import { SVGProps } from "react";

const SvgBadge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M12 0C8.7 0 6 2.7 6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6ZM9 14.43V24l3-3 3 3v-9.57c-.93.33-1.95.57-3 .57s-2.07-.24-3-.57Z" />
  </svg>
);

export default SvgBadge;
