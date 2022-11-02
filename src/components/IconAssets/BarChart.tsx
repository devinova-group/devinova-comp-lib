import * as React from "react";
import { SVGProps } from "react";

const SvgBarChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5V21a2 2 0 0 0 2 2h20.5a1.5 1.5 0 0 0 0-3H5a2 2 0 0 1-2-2V3.5A1.5 1.5 0 0 0 1.5 2ZM17 2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-2ZM8 8a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H8Z" />
  </svg>
);

export default SvgBarChart;
