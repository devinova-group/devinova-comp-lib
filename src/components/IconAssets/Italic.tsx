import * as React from "react";
import { SVGProps } from "react";

const SvgItalic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#italic_svg__a)">
      <path d="M6 0v1.092C6 2.146 6.854 3 7.908 3h2.552c.201 0 .334.208.25.39l-6 15-.526 1.36a2 2 0 0 1-1.865 1.28H1.53a1.5 1.5 0 0 0 0 3h12a1.5 1.5 0 1 0 0-3h-2.96a.275.275 0 0 1-.25-.39l6-15 .526-1.36A2 2 0 0 1 18.71 3h.789a1.5 1.5 0 1 0 0-3H6Z" />
    </g>
    <defs>
      <clipPath id="italic_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgItalic;
