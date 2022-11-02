import * as React from "react";
import { SVGProps } from "react";

const SvgCart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#cart_svg__a)">
      <path d="M.99 3.006c.003 0 .004.005 0 .005a1.52 1.52 0 0 0 .431 3.006c.053-.006.106-.01.159-.01h3.717a1 1 0 0 1 .941.66l.032.09 1.23 3.75 1.23 3.75c.12.39.63.75 1.02.75h10.5c.42 0 .9-.36 1.02-.75l2.43-7.5c.12-.39-.06-.75-.48-.75H10.503a1 1 0 0 1-.884-.534L8.76 3.846a1.5 1.5 0 0 0-1.32-.84h-6a1.5 1.5 0 0 0-.195-.005c-.05.002-.1.003-.15.002l-.105.003Zm9.51 15c-.84 0-1.5.66-1.5 1.5s.66 1.5 1.5 1.5 1.5-.66 1.5-1.5-.66-1.5-1.5-1.5Zm9 0c-.84 0-1.5.66-1.5 1.5s.66 1.5 1.5 1.5 1.5-.66 1.5-1.5-.66-1.5-1.5-1.5Z" />
    </g>
    <defs>
      <clipPath id="cart_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCart;
