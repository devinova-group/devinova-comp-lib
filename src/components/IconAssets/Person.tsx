import * as React from "react";
import { SVGProps } from "react";

const SvgPerson = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#person_svg__a)">
      <path d="M12 0C8.7 0 6 3.36 6 7.5c0 4.14 2.7 7.5 6 7.5s6-3.36 6-7.5C18 3.36 15.3 0 12 0ZM5.73 15C2.55 15.15 0 17.76 0 21v3h24v-3c0-3.24-2.52-5.85-5.73-6-1.62 1.83-3.84 3-6.27 3-2.43 0-4.65-1.17-6.27-3Z" />
    </g>
    <defs>
      <clipPath id="person_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPerson;
