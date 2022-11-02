import * as React from "react";
import { SVGProps } from "react";

const SvgX = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#x_svg__a)">
      <path d="M4.23 0 .707 3.523a1 1 0 0 0 0 1.414L2.16 6.39l4.645 4.723a1 1 0 0 1-.006 1.408L2.16 17.16.73 18.53a1 1 0 0 0-.023 1.422l2.816 2.876a1 1 0 0 0 1.422.007L6.39 21.39l4.717-4.717a1 1 0 0 1 1.42.006l4.633 4.711 1.363 1.422a1 1 0 0 0 1.43.016l2.875-2.876a1 1 0 0 0-.015-1.429L21.39 17.16l-4.711-4.633a1 1 0 0 1-.006-1.42L21.39 6.39l1.445-1.445a1 1 0 0 0-.007-1.422L19.952.707a1 1 0 0 0-1.421.023L17.16 2.16l-4.639 4.639a1 1 0 0 1-1.408.006L6.39 2.16 4.23 0Z" />
    </g>
    <defs>
      <clipPath id="x_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgX;
