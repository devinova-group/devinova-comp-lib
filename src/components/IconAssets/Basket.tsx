import * as React from "react";
import { SVGProps } from "react";

const SvgBasket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#basket_svg__a)">
      <path d="M11.91-.015a.016.016 0 0 1-.015.016A1.422 1.422 0 0 0 10.89.57L4.17 8.64A1 1 0 0 1 3.4 9H1.03a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v9.98c0 .54.48 1.02 1.02 1.02h15.93c.54 0 1.02-.48 1.02-1.02V13a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-2.366c-.3 0-.581-.131-.773-.362A2147.298 2147.298 0 0 0 12.93.36c-.325-.267-.65-.416-1.005-.392a.016.016 0 0 0-.015.017Zm-.677 4.77a1 1 0 0 1 1.534 0l2.178 2.603A1 1 0 0 1 14.18 9H9.82a1 1 0 0 1-.766-1.642l2.178-2.603ZM7.5 15c.84 0 1.5.66 1.5 1.5v3c0 .84-.66 1.5-1.5 1.5S6 20.34 6 19.5v-3c0-.84.66-1.5 1.5-1.5Zm9 0c.84 0 1.5.66 1.5 1.5v3c0 .84-.66 1.5-1.5 1.5s-1.5-.66-1.5-1.5v-3c0-.84.66-1.5 1.5-1.5Z" />
    </g>
    <defs>
      <clipPath id="basket_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgBasket;
