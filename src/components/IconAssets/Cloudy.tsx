import * as React from "react";
import { SVGProps } from "react";

const SvgCloudy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#cloudy_svg__a)">
      <path d="M7.5 0C3.36 0 0 3.36 0 7.5c0 .749.11 1.448.316 2.107.182.583.883.755 1.421.467a9.9 9.9 0 0 1 1.56-.666c.284-.094.52-.299.654-.567 1.454-2.928 4.254-5.033 7.534-5.653.814-.154 1.245-1.113.588-1.62A7.458 7.458 0 0 0 7.5 0Zm6 6c-3.344 0-6.307 2.19-7.292 5.209a1.26 1.26 0 0 1-1.024.847C2.266 12.457 0 14.976 0 18c0 3.3 2.7 6 6 6h13.5c2.49 0 4.5-2.01 4.5-4.5 0-1.704-.962-3.385-2.366-4.202-.364-.212-.634-.578-.634-1V13.5C21 9.36 17.64 6 13.5 6Z" />
    </g>
    <defs>
      <clipPath id="cloudy_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCloudy;
