import * as React from "react";
import { SVGProps } from "react";

const SvgLightbulb = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#lightbulb_svg__a)">
      <path d="M14.47 0c-.138.042-.27.102-.39.18l-9 4.5A1.5 1.5 0 1 0 6.4 7.32l9-4.5A1.5 1.5 0 0 0 14.47 0Zm3 4.5c-.138.042-.27.102-.39.18l-12 6a1.5 1.5 0 1 0 1.32 2.64l12-6a1.5 1.5 0 0 0-.93-2.82Zm0 6c-.138.042-.27.102-.39.18l-9 4.5A1.5 1.5 0 0 0 8.74 18h6a1.519 1.519 0 1 0 .48-3l3.18-1.68a1.5 1.5 0 0 0-.93-2.82ZM9.79 21a1.519 1.519 0 0 0 .48 3h3a1.5 1.5 0 1 0 0-3h-3a1.503 1.503 0 0 0-.27 0 1.5 1.5 0 0 0-.18 0h-.03Z" />
    </g>
    <defs>
      <clipPath id="lightbulb_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgLightbulb;
