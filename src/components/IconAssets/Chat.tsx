import * as React from "react";
import {SVGProps} from "react";

export const Chat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M1 0C0.447715 0 0 0.447715 0 1V12.5858C0 13.4767 1.07714 13.9229 1.70711 13.2929L2.70711 12.2929C2.89464 12.1054 3.149 12 3.41421 12H5C5.55228 12 6 11.5523 6 11V4C6 3.44772 6.44772 3 7 3H14C14.5523 3 15 2.55228 15 2V1C15 0.447715 14.5523 0 14 0H1ZM10 6C9.44772 6 9 6.44772 9 7V17C9 17.5523 9.44772 18 10 18H20.5858C20.851 18 21.1054 18.1054 21.2929 18.2929L22.2929 19.2929C22.9229 19.9229 24 19.4767 24 18.5858V7C24 6.44772 23.5523 6 23 6H10Z" />
  </svg>
);
