import * as React from "react";
import { SVGProps } from "react";

const SvgActionUndo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M13.5 3C7.71 3 3 7.71 3 13.5v.621a.879.879 0 0 1-.879.879c-.782 0-1.175.947-.621 1.5l3.793 3.793a1 1 0 0 0 1.414 0L10.5 16.5c.553-.553.162-1.5-.621-1.5A.879.879 0 0 1 9 14.121V13.5C9 9.36 12.36 6 16.5 6c4.14 0 7.5 3.36 7.5 7.5C24 7.71 19.29 3 13.5 3Z" />
  </svg>
);

export default SvgActionUndo;
