import * as React from "react";
import { SVGProps } from "react";

const SvgCommentSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#comment-square_svg__a)">
      <path d="M.285-.015A.055.055 0 0 1 .249 0C.083.01 0 .126 0 .27V17.7c0 .15.12.27.27.27h17.316a1 1 0 0 1 .707.293l4 4c.63.63 1.707.183 1.707-.708V.24c0-.18-.12-.27-.27-.27H.321a.051.051 0 0 0-.036.015Z" />
    </g>
    <defs>
      <clipPath id="comment-square_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCommentSquare;
