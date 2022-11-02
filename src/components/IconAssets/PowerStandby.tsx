import * as React from "react";
import { SVGProps } from "react";

const SvgPowerStandby = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M11 0v12h3V0h-3ZM7.16 4.32l-1.14.93C3.59 7.17 2 10.17 2 13.5 2 19.29 6.71 24 12.5 24S23 19.29 23 13.5c0-3.33-1.59-6.33-4.02-8.25l-1.14-.93-1.89 2.34 1.14.93C18.83 8.97 20 11.1 20 13.5c0 4.17-3.33 7.5-7.5 7.5S5 17.67 5 13.5c0-2.4 1.08-4.53 2.82-5.91l1.23-.93-1.89-2.34Z" />
  </svg>
);

export default SvgPowerStandby;
