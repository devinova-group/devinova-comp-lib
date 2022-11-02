import * as React from "react";
import { SVGProps } from "react";

const SvgPlayCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#play-circle_svg__a)">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0ZM9 7.869a1 1 0 0 1 1.555-.833l6.197 4.132a1 1 0 0 1 0 1.664l-6.197 4.131A1 1 0 0 1 9 16.131V7.87Z" />
    </g>
    <defs>
      <clipPath id="play-circle_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPlayCircle;
