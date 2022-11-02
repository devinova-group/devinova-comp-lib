import * as React from "react";
import { SVGProps } from "react";

const SvgSignal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M21.5 0A1.5 1.5 0 0 0 20 1.5v21a1.5 1.5 0 0 0 3 0v-21A1.5 1.5 0 0 0 21.5 0Zm-6 3A1.5 1.5 0 0 0 14 4.5v18a1.5 1.5 0 0 0 3 0v-18A1.5 1.5 0 0 0 15.5 3Zm-6 6A1.5 1.5 0 0 0 8 10.5v12a1.5 1.5 0 0 0 3 0v-12A1.5 1.5 0 0 0 9.5 9Zm-6 6A1.5 1.5 0 0 0 2 16.5v6a1.5 1.5 0 0 0 3 0v-6A1.5 1.5 0 0 0 3.5 15Z" />
  </svg>
);

export default SvgSignal;
