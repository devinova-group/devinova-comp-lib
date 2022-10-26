import * as React from "react";
import {SVGProps} from "react";

export const Eject = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clipPath="url(#eject_svg__a)">
      <path d="M13.562 1.952a2 2 0 0 0-3.124 0L2.6 11.751C1.552 13.06 2.484 15 4.16 15H19.84c1.677 0 2.61-1.94 1.562-3.25l-7.84-9.798ZM2 18a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H2Z" />
    </g>
    <defs>
      <clipPath id="eject_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);
