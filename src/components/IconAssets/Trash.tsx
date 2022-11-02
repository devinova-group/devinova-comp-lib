import * as React from "react";
import { SVGProps } from "react";

const SvgTrash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M11 0a3.012 3.012 0 0 0-2.834 2.018C7.984 2.54 7.552 3 7 3H5a3.012 3.012 0 0 0-2.834 2.018C1.984 5.54 2.448 6 3 6h19c.552 0 1.016-.46.834-.982A3.012 3.012 0 0 0 20 3h-2c-.552 0-.984-.46-1.166-.982A3.012 3.012 0 0 0 14 0h-3ZM5.03 9a.03.03 0 0 0-.03.03v14.4c0 .33.24.57.57.57h13.89c.33 0 .57-.24.57-.57V10a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v9.5c0 .84-.66 1.5-1.5 1.5s-1.5-.66-1.5-1.5V10a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v9.5c0 .84-.66 1.5-1.5 1.5s-1.5-.66-1.5-1.5V10a1 1 0 0 0-1-1h-2Z" />
  </svg>
);

export default SvgTrash;
