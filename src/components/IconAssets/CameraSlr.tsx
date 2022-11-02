import * as React from "react";
import { SVGProps } from "react";

const SvgCameraSlr = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#camera-slr_svg__a)">
      <path d="M12.225.015c.008-.003.006-.013-.002-.011-.134.022-.263.132-.343.266L9.06 5.7c-.06.15-.21.27-.39.27H4.44c-2.49 0-4.5 2.01-4.5 4.5V23.7c0 .15.12.27.27.27h23.43c.15 0 .27-.12.27-.27V6.27c0-.18-.12-.27-.27-.27h-2.43c-.15 0-.3-.12-.39-.27L18 .3c-.09-.15-.21-.27-.39-.27h-5.383c-.008 0-.01-.012-.002-.015ZM4.5 9c.84 0 1.5.66 1.5 1.5S5.34 12 4.5 12 3 11.34 3 10.5 3.66 9 4.5 9ZM15 9c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6Zm0 3c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3Z" />
    </g>
    <defs>
      <clipPath id="camera-slr_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCameraSlr;
