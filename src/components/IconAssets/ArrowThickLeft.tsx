import * as React from "react";
import { SVGProps } from "react";

const SvgArrowThickLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M9 5.431c0-.893-1.082-1.338-1.71-.703L.703 11.379a1 1 0 0 0 .007 1.415l6.585 6.52c.632.625 1.704.177 1.704-.711V16a1 1 0 0 1 1-1h13a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H10a1 1 0 0 1-1-1V5.431Z" />
  </svg>
);

export default SvgArrowThickLeft;
