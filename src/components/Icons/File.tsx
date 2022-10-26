import * as React from "react";
import {SVGProps} from "react";

export const File = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M3 0C2.44772 0 2 0.447715 2 1V23C2 23.5523 2.44772 24 3 24H22C22.5523 24 23 23.5523 23 23V13C23 12.4477 22.5523 12 22 12H12C11.4477 12 11 11.5523 11 11V1C11 0.447715 10.5523 0 10 0H3ZM15.7071 1.7071C15.0771 1.07714 14 1.52331 14 2.41421V8C14 8.55228 14.4477 9 15 9H20.5858C21.4767 9 21.9229 7.92286 21.2929 7.29289L15.7071 1.7071Z" />
  </svg>
);
