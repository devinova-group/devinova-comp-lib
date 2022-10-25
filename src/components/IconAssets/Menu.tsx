import * as React from "react";
import {SVGProps} from "react";

export const Menu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M1.5 2C0.671573 2 0 2.67157 0 3.5V3.5C0 4.32843 0.671573 5 1.5 5H22.5C23.3284 5 24 4.32843 24 3.5V3.5C24 2.67157 23.3284 2 22.5 2H1.5ZM1.5 10.91C0.671573 10.91 0 11.5816 0 12.41V12.41C0 13.2384 0.671573 13.91 1.5 13.91H22.5C23.3284 13.91 24 13.2384 24 12.41V12.41C24 11.5816 23.3284 10.91 22.5 10.91H1.5ZM1.5 19.91C0.671573 19.91 0 20.5816 0 21.41V21.41C0 22.2384 0.671573 22.91 1.5 22.91H22.5C23.3284 22.91 24 22.2384 24 21.41V21.41C24 20.5816 23.3284 19.91 22.5 19.91H1.5Z" />
  </svg>
);
