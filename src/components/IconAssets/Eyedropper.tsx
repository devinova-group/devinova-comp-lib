import * as React from "react";
import { SVGProps } from "react";

const SvgEyedropper = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#eyedropper_svg__a)">
      <path d="M9.93 0a1.5 1.5 0 0 0-.57 2.52l1.89 1.89L.48 15.39l-.48.48v8.16h8.07l.48-.48 10.98-10.98 1.89 1.98a1.5 1.5 0 1 0 2.16-2.07l-2.82-2.82 1.98-1.98c1.77-1.74 1.77-4.62 0-6.39-1.71-1.71-4.68-1.71-6.39 0l-1.98 1.98L11.55.45a1.5 1.5 0 0 0-1.41-.48 1.5 1.5 0 0 0-.18 0L9.93 0Zm3.48 6.57 3.93 3.93-9.48 9.48-3.84-3.93 9.39-9.48Z" />
    </g>
    <defs>
      <clipPath id="eyedropper_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgEyedropper;
