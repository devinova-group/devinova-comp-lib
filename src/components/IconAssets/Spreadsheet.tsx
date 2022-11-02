import * as React from "react";
import { SVGProps } from "react";

const SvgSpreadsheet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M2.25 2C1.02 2 0 3.02 0 4.25v16.5C0 21.98 1.02 23 2.25 23h19.5c1.23 0 2.25-1.02 2.25-2.25V4.25C24 3.02 22.98 2 21.75 2H2.25ZM3 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 1 1-3 0Zm6 0A1.5 1.5 0 0 1 10.5 5h9a1.5 1.5 0 0 1 0 3h-9A1.5 1.5 0 0 1 9 6.5Zm-6 6a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 0 3h-9A1.5 1.5 0 0 1 9 12.5Zm-6 6a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 0 3h-9A1.5 1.5 0 0 1 9 18.5Z" />
  </svg>
);

export default SvgSpreadsheet;
