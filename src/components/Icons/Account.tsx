import * as React from "react";
import {SVGProps} from "react";

export const Login = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M10 2C9.44772 2 9 2.44772 9 3V4C9 4.55228 9.44772 5 10 5H20C20.5523 5 21 5.44772 21 6V19C21 19.5523 20.5523 20 20 20H10C9.44772 20 9 20.4477 9 21V22C9 22.5523 9.44772 23 10 23H23C23.5523 23 24 22.5523 24 22V3C24 2.44772 23.5523 2 23 2H10ZM13.6 9.2C12.9408 8.70557 12 9.17595 12 10V10C12 10.5523 11.5523 11 11 11H1C0.447715 11 0 11.4477 0 12V13C0 13.5523 0.447715 14 1 14H11C11.5523 14 12 14.4477 12 15V15C12 15.824 12.9408 16.2944 13.6 15.8L16.9333 13.3C17.4667 12.9 17.4667 12.1 16.9333 11.7L13.6 9.2Z" />
  </svg>
);
export const Logout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M10 2C9.44772 2 9 2.44772 9 3V4C9 4.55228 9.44772 5 10 5H20C20.5523 5 21 5.44772 21 6V19C21 19.5523 20.5523 20 20 20H10C9.44772 20 9 20.4477 9 21V22C9 22.5523 9.44772 23 10 23H23C23.5523 23 24 22.5523 24 22V3C24 2.44772 23.5523 2 23 2H10ZM6 10C6 9.17595 5.05924 8.70557 4.4 9.2L1.06667 11.7C0.533334 12.1 0.533333 12.9 1.06667 13.3L4.4 15.8C5.05924 16.2944 6 15.824 6 15V15C6 14.4477 6.44772 14 7 14H17C17.5523 14 18 13.5523 18 13V12C18 11.4477 17.5523 11 17 11H7C6.44772 11 6 10.5523 6 10V10Z" />
  </svg>
);