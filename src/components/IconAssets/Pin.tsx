import * as React from "react";
import { SVGProps } from "react";

const SvgPin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#pin_svg__a)">
      <path d="M6.05 0c-.02 0-.04.002-.06.005a1.52 1.52 0 0 0 .431 3.006c.053-.006.106-.01.158-.01H7a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a3.012 3.012 0 0 0-2.834 2.018c-.182.521.282.981.834.981h7a1 1 0 0 1 1 1v7.79a1 1 0 0 0 .085.403l.427.971a1 1 0 0 0 1.788.086l.572-1.022a1 1 0 0 0 .128-.489V13a1 1 0 0 1 1-1h7c.552 0 1.016-.46.834-.981A3.012 3.012 0 0 0 20 9h-2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h.5a1.5 1.5 0 0 0 0-3h-12a1.5 1.5 0 0 0-.195-.005l-.15.003c-.035 0-.07 0-.105.002Z" />
    </g>
    <defs>
      <clipPath id="pin_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPin;
