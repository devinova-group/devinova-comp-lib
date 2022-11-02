import * as React from "react";
import { SVGProps } from "react";

const SvgThumbDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M1 0a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1Zm6 0a1 1 0 0 0-1 1v10c0 .552.458.98.987 1.14.44.134.838.365 1.173.7.57.57 3.45 6.36 3.84 7.14.39.78 1.17 1.17 1.98.93.78-.24 1.2-1.08.93-1.89-.24-.78-1.41-4.77-1.41-5.52S14.16 12 15 12h4.5c.84 0 1.5-.66 1.5-1.5 0-.81-2.87-8.947-3.078-9.536A1.552 1.552 0 0 0 16.5 0H7Z" />
  </svg>
);

export default SvgThumbDown;
