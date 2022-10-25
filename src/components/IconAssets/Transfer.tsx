import * as React from "react";
import {SVGProps} from "react";

export const Transfer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M19.6 3.2C18.9408 2.70557 18 3.17595 18 4V4C18 4.55228 17.5523 5 17 5H1C0.447716 5 0 5.44772 0 6V7C0 7.55228 0.447715 8 1 8H17C17.5523 8 18 8.44772 18 9V9C18 9.82405 18.9408 10.2944 19.6 9.8L22.9333 7.3C23.4667 6.9 23.4667 6.1 22.9333 5.7L19.6 3.2ZM6 16C6 15.176 5.05924 14.7056 4.4 15.2L1.06667 17.7C0.533334 18.1 0.533333 18.9 1.06667 19.3L4.4 21.8C5.05924 22.2944 6 21.824 6 21V21C6 20.4477 6.44772 20 7 20H23C23.5523 20 24 19.5523 24 19V18C24 17.4477 23.5523 17 23 17H7C6.44772 17 6 16.5523 6 16V16Z" />
  </svg>
);
