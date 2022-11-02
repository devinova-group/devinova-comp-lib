import * as React from "react";
import { SVGProps } from "react";

const SvgShare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M16.688 3.597C16.05 2.994 15 3.446 15 4.324V7c0 .552-.45.998-1.002 1.015-7.451.225-11.191 2.994-12.855 7.366-.417 1.096 1.942 1.877 2.86 1.146C6.104 14.851 8.835 14 12 14h2a1 1 0 0 1 1 1v2.494c0 .904 1.103 1.344 1.725.689l6.585-6.937a1 1 0 0 0-.037-1.414l-6.585-6.235Z" />
  </svg>
);

export default SvgShare;
