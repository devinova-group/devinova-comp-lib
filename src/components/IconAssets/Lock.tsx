import * as React from "react";
import {SVGProps} from "react";

export const Unlocked = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M12 0C9.03899 0 6.56104 2.17378 6.0832 5.0043C5.99126 5.54888 6.44772 6 7 6H8C8.55228 6 8.98292 5.54037 9.15931 5.01701C9.55848 3.83266 10.6657 3 12 3C13.68 3 15 4.32 15 6V11C15 11.5523 14.5523 12 14 12H4C3.44772 12 3 12.4477 3 13V23C3 23.5523 3.44772 24 4 24H20C20.5523 24 21 23.5523 21 23V13C21 12.4477 20.5523 12 20 12H19C18.4477 12 18 11.5523 18 11V6C18 2.7 15.3 0 12 0Z" />
  </svg>
);
export const Locked = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M12 2C8.7 2 6 4.7 6 8V10C6 10.5523 5.55228 11 5 11H4C3.44772 11 3 11.4477 3 12V22C3 22.5523 3.44772 23 4 23H20C20.5523 23 21 22.5523 21 22V12C21 11.4477 20.5523 11 20 11H19C18.4477 11 18 10.5523 18 10V8C18 4.7 15.3 2 12 2ZM12 5C13.68 5 15 6.32 15 8V10C15 10.5523 14.5523 11 14 11H10C9.44772 11 9 10.5523 9 10V8C9 6.32 10.32 5 12 5Z" />
  </svg>
);
