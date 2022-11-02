import * as React from "react";
import { SVGProps } from "react";

const SvgCode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M15.83 3c-.509 0-.974.287-1.2.742L6.97 19.058a1.342 1.342 0 0 0 2.4 1.2l7.66-15.316A1.342 1.342 0 0 0 15.83 3Zm-12 3c-.509 0-.974.287-1.2.742L.446 11.106a2 2 0 0 0 0 1.788l2.182 4.364a1.342 1.342 0 1 0 2.4-1.2l-1.582-3.164a2 2 0 0 1 0-1.788L5.03 7.942A1.342 1.342 0 0 0 3.83 6Zm16.34 0a1.342 1.342 0 0 0-1.2 1.942l1.583 3.164a2 2 0 0 1 0 1.788l-1.582 3.164a1.342 1.342 0 1 0 2.4 1.2l2.182-4.364a2 2 0 0 0 0-1.788L21.37 6.742A1.342 1.342 0 0 0 20.17 6Z" />
  </svg>
);

export default SvgCode;
