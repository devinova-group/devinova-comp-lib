import * as React from "react";
import { SVGProps } from "react";

const SvgPieChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#pie-chart_svg__a)">
      <path d="M10.5 0C7.952 0 5.635.92 3.829 2.417c-.425.352-.422.99-.032 1.38l6.496 6.496c.63.63 1.707.184 1.707-.707V.973c0-.505-.376-.934-.88-.958C10.916.005 10.709 0 10.5 0Zm5.635 3.411c-.59-.154-1.135.317-1.135.928v8.657a1 1 0 0 1-.293.707l-7.086 7.086c-.418.418-.386 1.11.105 1.438C9.386 23.337 11.346 24 13.5 24 19.29 24 24 19.29 24 13.5c0-4.879-3.355-8.912-7.865-10.089ZM3.425 7.793c-.387-.38-1.01-.387-1.359.029A8.8 8.8 0 0 0 0 13.5c0 2.56 1.09 4.813 2.809 6.44.367.349.94.31 1.298-.047l5.05-5.05a1 1 0 0 0-.006-1.42l-5.727-5.63Z" />
    </g>
    <defs>
      <clipPath id="pie-chart_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPieChart;
