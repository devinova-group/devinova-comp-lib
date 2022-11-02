import * as React from "react";
import { SVGProps } from "react";

const SvgDashboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#dashboard_svg__a)">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0Zm0 3c4.98 0 9 4.02 9 9s-4.02 9-9 9-9-4.02-9-9 4.02-9 9-9Zm0 3c-.84 0-1.5.66-1.5 1.5S11.16 9 12 9s1.5-.66 1.5-1.5S12.84 6 12 6ZM7.02 9a1.5 1.5 0 0 0-.57 2.52l2.73 2.73c-.06.24-.18.48-.18.75 0 1.65 1.35 3 3 3s3-1.35 3-3-1.35-3-3-3c-.27 0-.51.12-.75.18L8.52 9.45a1.5 1.5 0 0 0-1.32-.48 1.501 1.501 0 0 0-.18 0V9Zm9.48 0c-.84 0-1.5.66-1.5 1.5s.66 1.5 1.5 1.5 1.5-.66 1.5-1.5S17.34 9 16.5 9Z" />
    </g>
    <defs>
      <clipPath id="dashboard_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgDashboard;
