import React from "react";
import {SVGProps} from "react";

export const Calendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height={props.height ? props.height : 24}
    role="img"
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1.03024 0V6H22.0302V0H1.03024ZM1.03024 9V23.73C1.03024 23.88 1.15024 24 1.30024 24H21.7302C21.8802 24 22.0002 23.88 22.0002 23.73V9H1.00024H1.03024ZM4.03024 12H7.03024V15H4.03024V12ZM10.0302 12H13.0302V15H10.0302V12ZM16.0302 12H19.0302V15H16.0302V12ZM4.03024 18H7.03024V21H4.03024V18ZM10.0302 18H13.0302V21H10.0302V18Z" />
  </svg>
);
