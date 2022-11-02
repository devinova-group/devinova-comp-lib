import * as React from "react";
import { SVGProps } from "react";

const SvgMusicalNote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#musical-note_svg__a)">
      <path d="M24 0C9 0 6 3 6 3v12.27c-.45-.15-.99-.27-1.5-.27C2.01 15 0 17.01 0 19.5S2.01 24 4.5 24 9 21.99 9 19.5V7.59c2.19-.69 5.97-1.32 12-1.5v6.18c-.45-.15-.99-.27-1.5-.27-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5V0Z" />
    </g>
    <defs>
      <clipPath id="musical-note_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgMusicalNote;
