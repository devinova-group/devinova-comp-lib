import * as React from "react";
import { SVGProps } from "react";

const SvgCreditCard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M.75 3C.33 3 0 3.33 0 3.75V6h24V3.75c0-.42-.33-.75-.75-.75H.75ZM0 9v11.25c0 .42.33.75.75.75h22.5c.42 0 .75-.33.75-.75V9H0Zm3 6h3v3H3v-3Zm6 0h3v3H9v-3Z" />
  </svg>
);

export default SvgCreditCard;
