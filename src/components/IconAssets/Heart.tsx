import * as React from "react";
import { SVGProps } from "react";

const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M6 3c-1.65 0-3.12.69-4.23 1.77C.69 5.85 0 7.32 0 9c0 1.65.69 3.12 1.77 4.23l8.816 8.816a2 2 0 0 0 2.828 0l8.816-8.816C23.31 12.15 24 10.68 24 9c0-1.65-.69-3.12-1.77-4.23C21.15 3.69 19.68 3 18 3c-1.65 0-3.12.69-4.23 1.77C12.69 5.85 12 7.32 12 9c0-1.65-.69-3.12-1.77-4.23C9.15 3.69 7.68 3 6 3Z" />
  </svg>
);

export default SvgHeart;
