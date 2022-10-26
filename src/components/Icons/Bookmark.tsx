import * as React from "react";
import {SVGProps} from "react";

export const Bookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M7 0a1 1 0 0 0-1 1v20.586c0 .89 1.077 1.337 1.707.707l3.586-3.586a1 1 0 0 1 1.414 0l3.586 3.586c.63.63 1.707.184 1.707-.707V1a1 1 0 0 0-1-1H7Z" />
  </svg>
);
