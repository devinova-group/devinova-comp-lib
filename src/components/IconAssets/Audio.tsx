import * as React from "react";
import { SVGProps } from "react";

const SvgAudio = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#audio_svg__a)">
      <path d="M3.48 3A11.854 11.854 0 0 0 0 11.43c0 3.3 1.29 6.36 3.48 8.52l2.16-2.16A8.996 8.996 0 0 1 3 11.4c0-2.49.99-4.65 2.64-6.27L3.48 2.97V3Zm17.07 0-2.16 2.16c1.62 1.62 2.64 3.78 2.64 6.27 0 2.49-.99 4.74-2.64 6.39l2.16 2.16c2.16-2.16 3.48-5.22 3.48-8.52s-1.29-6.27-3.48-8.43V3ZM7.8 7.23a5.988 5.988 0 0 0-1.77 4.23c0 1.65.69 3.24 1.77 4.32l2.07-2.16c-.54-.54-.84-1.32-.84-2.16 0-.84.3-1.5.84-2.07L7.8 7.23Zm8.43 0-2.07 2.16c.54.54.84 1.23.84 2.07 0 .84-.3 1.62-.84 2.16l2.07 2.16C17.31 14.7 18 13.11 18 11.46c0-1.65-.69-3.15-1.77-4.23Z" />
    </g>
    <defs>
      <clipPath id="audio_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgAudio;
