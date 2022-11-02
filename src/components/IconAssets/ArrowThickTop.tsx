import * as React from "react";
import { SVGProps } from "react";

const SvgArrowThickTop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M12.62.704a1 1 0 0 0-1.414.007l-6.52 6.585C4.062 7.928 4.51 9 5.398 9H8a1 1 0 0 1 1 1v13a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V10a1 1 0 0 1 1-1h2.569c.893 0 1.338-1.082.703-1.71L12.621.703Z" />
  </svg>
);

export default SvgArrowThickTop;
