import * as React from "react";
import { SVGProps } from "react";

const SvgText = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#text_svg__a)">
      <path d="M1 0a1 1 0 0 0-1 1v4.25c0 .414.336.75.75.75s.74-.341.844-.742A3.012 3.012 0 0 1 4.5 3H8a1 1 0 0 1 1 1v15.5c0 .84-.66 1.5-1.5 1.5H7a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-.5c-.84 0-1.5-.66-1.5-1.5V4a1 1 0 0 1 1-1h3.5c1.394 0 2.574.964 2.907 2.258.103.4.429.742.843.742a.75.75 0 0 0 .75-.75V1a1 1 0 0 0-1-1H1Z" />
    </g>
    <defs>
      <clipPath id="text_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgText;
