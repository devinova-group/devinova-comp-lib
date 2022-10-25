import * as React from "react";
import {SVGProps} from "react";

export const Clipboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M12.5 0C11.66 0 11 0.66 11 1.5V2C11 2.55228 10.5523 3 10 3H8.75C8.33 3 8 3.33 8 3.75V5C8 5.55228 8.44772 6 9 6H16C16.5523 6 17 5.55228 17 5V3.75C17 3.33 16.67 3 16.25 3H15C14.4477 3 14 2.55228 14 2V1.5C14 0.66 13.34 0 12.5 0ZM2.75 3C2.33 3 2 3.33 2 3.75V23.25C2 23.67 2.33 24 2.75 24H22.25C22.67 24 23 23.67 23 23.25V3.75C23 3.33 22.67 3 22.25 3H21C20.4477 3 20 3.44772 20 4V8C20 8.55228 19.5523 9 19 9H6C5.44772 9 5 8.55228 5 8V4C5 3.44772 4.55228 3 4 3H2.75Z" />
  </svg>
);
