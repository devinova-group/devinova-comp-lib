import * as React from "react";
import { SVGProps } from "react";

const SvgClock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#clock_svg__a)">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0Zm0 3c4.98 0 9 4.02 9 9s-4.02 9-9 9-9-4.02-9-9 4.02-9 9-9Zm-1.5 3v6.184a1 1 0 0 0 .37.776l.11.09 1.5 1.5.315.352a1 1 0 0 0 1.453.04l.665-.665a1 1 0 0 0-.04-1.452l-.353-.315-.727-.727a1 1 0 0 1-.293-.707V7.06a1 1 0 0 0-1-1h-1.94A.06.06 0 0 1 10.5 6Z" />
    </g>
    <defs>
      <clipPath id="clock_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgClock;
