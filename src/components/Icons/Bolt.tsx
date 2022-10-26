import * as React from "react";
import {SVGProps} from "react";

export const Bolt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M14 3.61c0-1.014-1.336-1.384-1.857-.514l-6.234 10.39A1 1 0 0 0 6.766 15H10a1 1 0 0 1 1 1v4.39c0 1.014 1.336 1.384 1.857.514l6.234-10.39A1 1 0 0 0 18.234 9H15a1 1 0 0 1-1-1V3.61Z" />
  </svg>
);
