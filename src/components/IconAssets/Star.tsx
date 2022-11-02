import * as React from "react";
import { SVGProps } from "react";

const SvgStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#star_svg__a)">
      <path d="M12.949 2.846c-.304-.912-1.594-.912-1.898 0l-1.823 5.47A1 1 0 0 1 8.279 9H2.851c-.946 0-1.363 1.19-.625 1.78l4.73 3.784a1 1 0 0 1 .323 1.098l-1.708 5.126c-.315.945.795 1.72 1.573 1.097l4.231-3.385a1 1 0 0 1 1.25 0l4.23 3.385c.779.622 1.89-.152 1.574-1.098l-1.708-5.125a1 1 0 0 1 .323-1.098l4.73-3.783c.738-.59.32-1.781-.625-1.781h-5.428a1 1 0 0 1-.949-.684l-1.823-5.47Z" />
    </g>
    <defs>
      <clipPath id="star_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgStar;
