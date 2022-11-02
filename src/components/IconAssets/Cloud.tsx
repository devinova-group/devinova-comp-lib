import * as React from "react";
import { SVGProps } from "react";

const SvgCloud = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M13.5 3c-3.344 0-6.307 2.19-7.292 5.209a1.26 1.26 0 0 1-1.024.847C2.266 9.457 0 11.976 0 15c0 3.3 2.7 6 6 6h13.5c2.49 0 4.5-2.01 4.5-4.5 0-1.704-.962-3.385-2.366-4.202-.364-.212-.634-.578-.634-1V10.5C21 6.36 17.64 3 13.5 3Z" />
  </svg>
);

export default SvgCloud;
