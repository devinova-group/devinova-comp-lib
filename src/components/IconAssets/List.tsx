import * as React from "react";
import { SVGProps } from "react";

const SvgList = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M1.5 2C.66 2 0 2.66 0 3.5S.66 5 1.5 5 3 4.34 3 3.5 2.34 2 1.5 2Zm6 0a1.5 1.5 0 1 0 0 3h15a1.5 1.5 0 0 0 0-3h-15Zm-6 6C.66 8 0 8.66 0 9.5S.66 11 1.5 11 3 10.34 3 9.5 2.34 8 1.5 8Zm6 0a1.5 1.5 0 0 0 0 3h15a1.5 1.5 0 0 0 0-3h-15Zm-6 6c-.84 0-1.5.66-1.5 1.5S.66 17 1.5 17 3 16.34 3 15.5 2.34 14 1.5 14Zm6 0a1.5 1.5 0 0 0 0 3h15a1.5 1.5 0 0 0 0-3h-15Zm-6 6c-.84 0-1.5.66-1.5 1.5S.66 23 1.5 23 3 22.34 3 21.5 2.34 20 1.5 20Zm6 0a1.5 1.5 0 0 0 0 3h15a1.5 1.5 0 0 0 0-3h-15Z" />
  </svg>
);

export default SvgList;
