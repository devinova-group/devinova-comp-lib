import * as React from "react";
import { SVGProps } from "react";

const SvgShield = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#shield_svg__a)">
      <path d="m12 0-.57.27L.93 4.68l-.072.03C.338 4.928 0 5.437 0 6c0 4.98 2.01 9.36 4.41 12.57 1.2 1.59 2.49 2.91 3.75 3.84C9.42 23.34 10.65 24 12 24c1.38 0 2.58-.66 3.84-1.59 1.26-.93 2.55-2.25 3.75-3.84C21.99 15.36 24 10.98 24 6c0-.563-.338-1.072-.858-1.29l-.072-.03L12.57.27 12 0Zm0 3.27V19c0 1.105-.899 1.81-1.812 1.188a6.439 6.439 0 0 1-.168-.118c-.99-.72-2.13-1.89-3.18-3.27-1.675-2.225-3.031-5.204-3.509-8.419-.125-.845.38-1.641 1.17-1.969l7.471-3.1A.045.045 0 0 0 12 3.27Z" />
    </g>
    <defs>
      <clipPath id="shield_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgShield;
