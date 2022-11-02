import * as React from "react";
import { SVGProps } from "react";

const SvgCommand = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M6.5 2C4.01 2 2 4.01 2 6.5S4.01 11 6.5 11H8v3H6.5C4.01 14 2 16.01 2 18.5S4.01 23 6.5 23s4.5-2.01 4.5-4.5V17h3v1.5c0 2.49 2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5H17v-3h1.5c2.49 0 4.5-2.01 4.5-4.5S20.99 2 18.5 2 14 4.01 14 6.5V8h-3V6.5C11 4.01 8.99 2 6.5 2Zm0 3C7.34 5 8 5.66 8 6.5V8H6.5C5.66 8 5 7.34 5 6.5S5.66 5 6.5 5Zm12 0c.84 0 1.5.66 1.5 1.5S19.34 8 18.5 8H17V6.5c0-.84.66-1.5 1.5-1.5ZM11 11h3v3h-3v-3Zm-4.5 6H8v1.5c0 .84-.66 1.5-1.5 1.5S5 19.34 5 18.5 5.66 17 6.5 17ZM17 17h1.5c.84 0 1.5.66 1.5 1.5s-.66 1.5-1.5 1.5-1.5-.66-1.5-1.5V17Z" />
  </svg>
);

export default SvgCommand;
