import * as React from "react";
import { SVGProps } from "react";

const SvgSun = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#sun_svg__a)">
      <path d="M12 0c-.84 0-1.5.66-1.5 1.5S11.16 3 12 3s1.5-.66 1.5-1.5S12.84 0 12 0ZM4.5 3C3.66 3 3 3.66 3 4.5S3.66 6 4.5 6 6 5.34 6 4.5 5.34 3 4.5 3Zm15 0c-.84 0-1.5.66-1.5 1.5S18.66 6 19.5 6 21 5.34 21 4.5 20.34 3 19.5 3ZM12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6ZM1.5 10.5c-.84 0-1.5.66-1.5 1.5s.66 1.5 1.5 1.5S3 12.84 3 12s-.66-1.5-1.5-1.5Zm21 0c-.84 0-1.5.66-1.5 1.5s.66 1.5 1.5 1.5S24 12.84 24 12s-.66-1.5-1.5-1.5ZM4.5 18c-.84 0-1.5.66-1.5 1.5S3.66 21 4.5 21 6 20.34 6 19.5 5.34 18 4.5 18Zm15 0c-.84 0-1.5.66-1.5 1.5s.66 1.5 1.5 1.5 1.5-.66 1.5-1.5-.66-1.5-1.5-1.5ZM12 21c-.84 0-1.5.66-1.5 1.5S11.16 24 12 24s1.5-.66 1.5-1.5S12.84 21 12 21Z" />
    </g>
    <defs>
      <clipPath id="sun_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSun;
