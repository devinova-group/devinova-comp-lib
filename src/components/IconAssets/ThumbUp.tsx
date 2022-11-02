import * as React from "react";
import { SVGProps } from "react";

const SvgThumbUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#thumb-up_svg__a)">
      <path d="M13.41 0C12.84.06 12.3.45 12 1.02c-.39.78-3.27 6.57-3.84 7.14a2.783 2.783 0 0 1-1.173.7C6.458 9.02 6 9.448 6 10v10a1 1 0 0 0 1 1h9.5a1.552 1.552 0 0 0 1.422-.963C18.13 19.447 21 11.31 21 10.5c0-.84-.66-1.5-1.5-1.5H15c-.84 0-1.5-.75-1.5-1.5s1.17-4.74 1.41-5.52c.24-.78-.15-1.62-.93-1.89-.21-.06-.36-.12-.57-.09ZM1 9a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1H1Z" />
    </g>
    <defs>
      <clipPath id="thumb-up_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgThumbUp;
