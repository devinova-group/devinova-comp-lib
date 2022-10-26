import * as React from "react";
import {SVGProps} from "react";

export const Home = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M12.6 2.45C12.2444 2.18333 11.7556 2.18333 11.4 2.45L1.8 9.65C1.22339 10.0825 1.52924 11 2.25 11V11C2.66421 11 3 11.3358 3 11.75V22C3 22.5523 3.44772 23 4 23H8C8.55228 23 9 22.5523 9 22V18C9 17.4477 9.44772 17 10 17H14C14.5523 17 15 17.4477 15 18V22C15 22.5523 15.4477 23 16 23H20C20.5523 23 21 22.5523 21 22V11.6486C21 11.2443 21.3342 10.92 21.7382 10.9321V10.9321C22.4377 10.9531 22.7496 10.0622 22.1898 9.64233L12.6 2.45Z" />
  </svg>
);
