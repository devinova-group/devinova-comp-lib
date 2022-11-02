import * as React from "react";
import { SVGProps } from "react";

const SvgBan = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#ban_svg__a)">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0Zm0 3c1.98 0 3.78.63 5.25 1.68L4.68 17.25A8.978 8.978 0 0 1 3 12c0-4.98 4.02-9 9-9Zm7.32 3.75A8.978 8.978 0 0 1 21 12c0 4.98-4.02 9-9 9-1.98 0-3.78-.63-5.25-1.68L19.32 6.75Z" />
    </g>
    <defs>
      <clipPath id="ban_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgBan;
