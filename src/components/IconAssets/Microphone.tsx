import * as React from "react";
import { SVGProps } from "react";

const SvgMicrophone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#microphone_svg__a)">
      <path d="M11.73-.09a2.996 2.996 0 0 0-.39.09A3 3 0 0 0 9 3v6a3 3 0 1 0 6 0V3a3 3 0 0 0-3.27-3.09ZM4.05 6a1.5 1.5 0 0 0-1.02 1.5V9c0 4.44 3.27 8.07 7.5 8.82V21h-1.5c-1.65 0-3 1.35-3 3h12.03c0-1.65-1.35-3-3-3h-1.5v-3.18c4.23-.72 7.5-4.38 7.5-8.82V7.5a1.5 1.5 0 0 0-3 0V9c0 3.33-2.67 6-6 6s-6-2.67-6-6V7.5A1.5 1.5 0 0 0 4.29 6a1.501 1.501 0 0 0-.18 0h-.06Z" />
    </g>
    <defs>
      <clipPath id="microphone_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgMicrophone;
