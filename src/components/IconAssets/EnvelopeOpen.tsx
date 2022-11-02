import * as React from "react";
import { SVGProps } from "react";

const SvgEnvelopeOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#envelope-open_svg__a)">
      <path d="M12.894.447a2 2 0 0 0-1.788 0l-10 5A2 2 0 0 0 0 7.237V22a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V7.236a2 2 0 0 0-1.106-1.789l-10-5Zm-1.788 3.39a2 2 0 0 1 1.788 0l7 3.5A2 2 0 0 1 21 9.127v3.167a2 2 0 0 1-1.106 1.789l-7 3.5a2 2 0 0 1-1.788 0l-7-3.5A2 2 0 0 1 3 12.293V9.127a2 2 0 0 1 1.106-1.789l7-3.5ZM7.854 9.03a1.854 1.854 0 0 0-.83 3.513l4.082 2.04a2 2 0 0 0 1.788 0l4.081-2.04a1.854 1.854 0 0 0-.83-3.513h-8.29Z" />
    </g>
    <defs>
      <clipPath id="envelope-open_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgEnvelopeOpen;
