import * as React from "react";
import { SVGProps } from "react";

const SvgActionRedo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M10.5 3C4.71 3 0 7.71 0 13.5 0 9.36 3.36 6 7.5 6c4.14 0 7.5 3.36 7.5 7.5v.621a.879.879 0 0 1-.879.879c-.783 0-1.175.947-.621 1.5l3.793 3.793a1 1 0 0 0 1.414 0L22.5 16.5c.553-.553.162-1.5-.621-1.5a.879.879 0 0 1-.879-.879V13.5C21 7.71 16.29 3 10.5 3Z" />
  </svg>
);

export default SvgActionRedo;
