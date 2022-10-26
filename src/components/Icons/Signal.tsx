import * as React from "react";
import {SVGProps} from "react";

export const Signal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M21.5 0C20.6716 0 20 0.671573 20 1.5V22.5C20 23.3284 20.6716 24 21.5 24V24C22.3284 24 23 23.3284 23 22.5V1.5C23 0.671573 22.3284 0 21.5 0V0ZM15.5 3C14.6716 3 14 3.67157 14 4.5V22.5C14 23.3284 14.6716 24 15.5 24V24C16.3284 24 17 23.3284 17 22.5V4.5C17 3.67157 16.3284 3 15.5 3V3ZM9.5 9C8.67157 9 8 9.67157 8 10.5V22.5C8 23.3284 8.67157 24 9.5 24V24C10.3284 24 11 23.3284 11 22.5V10.5C11 9.67157 10.3284 9 9.5 9V9ZM3.5 15C2.67157 15 2 15.6716 2 16.5V22.5C2 23.3284 2.67157 24 3.5 24V24C4.32843 24 5 23.3284 5 22.5V16.5C5 15.6716 4.32843 15 3.5 15V15Z" />
  </svg>
);
