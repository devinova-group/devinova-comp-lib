import * as React from "react";
import { SVGProps } from "react";

const SvgBook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M5 0c-.21 0-.39.03-.57.09a3.023 3.023 0 0 0-2.31 2.212c-.022.084-.053.166-.078.25C2 2.692 2 2.837 2 3v16.5C2 21.99 4.01 24 6.5 24H22a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H6.5c-.84 0-1.5-.66-1.5-1.5S5.66 18 6.5 18H22a1 1 0 0 0 1-1V1.5c0-.84-.66-1.5-1.5-1.5H21a1 1 0 0 0-1 1v5.586c0 .89-1.077 1.337-1.707.707l-.586-.586a1 1 0 0 0-1.414 0l-.586.586c-.63.63-1.707.184-1.707-.707V1a1 1 0 0 0-1-1H5Z" />
  </svg>
);

export default SvgBook;
