import * as React from "react";
import { SVGProps } from "react";

const SvgWrench = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#wrench_svg__a)">
      <path d="M16.515.015A.051.051 0 0 0 16.48 0 7.503 7.503 0 0 0 9 7.5c0 .512.068 1.007.182 1.49.182.77.026 1.599-.536 2.155L.84 18.87c-1.17 1.17-1.17 3.15 0 4.32.6.6 1.38.84 2.16.84.78 0 1.56-.27 2.16-.84l7.713-7.794c.563-.568 1.403-.72 2.182-.54.47.11.96.174 1.475.174 4.14 0 7.5-3.36 7.5-7.5 0-.605-.663-.837-1.09-.41l-1.382 1.382a1.803 1.803 0 0 1-1.275.528H17.03a2 2 0 0 1-2-2V3.777c0-.478.19-.937.528-1.275L17.121.939c.35-.35.161-.906-.334-.908L16.551.03a.052.052 0 0 1-.036-.015ZM3 19.5c.84 0 1.5.66 1.5 1.5s-.66 1.5-1.5 1.5-1.5-.66-1.5-1.5.66-1.5 1.5-1.5Z" />
    </g>
    <defs>
      <clipPath id="wrench_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgWrench;
