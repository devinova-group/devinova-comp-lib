import * as React from "react";
import { SVGProps } from "react";

const SvgPuzzlePiece = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#puzzle-piece_svg__a)">
      <path d="M9 0c-.84 0-1.62.3-2.16.84S6 2.16 6 3c0 .84.54 1.44.84 2.16.21.42-.291.84-.761.84H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.082c.468 0 .906-.396.758-.84C6.54 22.44 6 21.84 6 21c0-.84.3-1.62.84-2.16S8.16 18 9 18c.84 0 1.62.3 2.16.84S12 20.16 12 21c0 .84-.54 1.44-.84 2.16-.21.42.291.84.761.84H16a2 2 0 0 0 2-2v-4.082c0-.468.396-.906.84-.758.72.3 1.32.84 2.16.84.84 0 1.62-.3 2.16-.84S24 15.84 24 15c0-.84-.3-1.62-.84-2.16S21.84 12 21 12c-.84 0-1.44.54-2.16.84-.42.21-.84-.291-.84-.761V8a2 2 0 0 0-2-2h-4.082c-.468 0-.906-.396-.758-.84.3-.72.84-1.32.84-2.16 0-.84-.3-1.62-.84-2.16S9.84 0 9 0Z" />
    </g>
    <defs>
      <clipPath id="puzzle-piece_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPuzzlePiece;
