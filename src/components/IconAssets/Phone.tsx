import * as React from "react";
import { SVGProps } from "react";

const SvgPhone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#phone_svg__a)">
      <path d="M4.57 0C4.24 0 4 .24 4 .57v22.89c0 .33.24.57.57.57h13.89c.33 0 .57-.24.57-.57V.57c0-.33-.24-.57-.57-.57H4.57ZM7 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4Zm4.5 15.5c.84 0 1.5.66 1.5 1.5s-.66 1.5-1.5 1.5S10 21.84 10 21s.66-1.5 1.5-1.5Z" />
    </g>
    <defs>
      <clipPath id="phone_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPhone;
