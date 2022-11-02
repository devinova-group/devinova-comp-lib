import * as React from "react";
import { SVGProps } from "react";

const SvgPencil = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#pencil_svg__a)">
      <path d="M19.414 1.414a2 2 0 0 0-2.828 0l-.172.172a2 2 0 0 0 0 2.828l3.172 3.172a2 2 0 0 0 2.828 0l.172-.172a2 2 0 0 0 0-2.828l-3.172-3.172Zm-6 6a2 2 0 0 0-2.828 0l-10 10A2 2 0 0 0 0 18.828V22a2 2 0 0 0 2 2h3.172a2 2 0 0 0 1.414-.586l10-10a2 2 0 0 0 0-2.828l-3.172-3.172Z" />
    </g>
    <defs>
      <clipPath id="pencil_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPencil;
