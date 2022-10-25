import * as React from "react";
import {SVGProps} from "react";

export const Pause = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H7C8.10457 21 9 20.1046 9 19V5C9 3.89543 8.10457 3 7 3H5ZM17 3C15.8954 3 15 3.89543 15 5V19C15 20.1046 15.8954 21 17 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H17Z" />
  </svg>
);
export const Play = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M5.89442 4.44721C4.56462 3.78231 3 4.7493 3 6.23607V17.7639C3 19.2507 4.56463 20.2177 5.89443 19.5528L17.4223 13.7889C18.8964 13.0518 18.8964 10.9482 17.4223 10.2111L5.89442 4.44721Z" />
  </svg>
);
export const Record = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M12 3C7.02 3 3 7.02 3 12C3 16.98 7.02 21 12 21C16.98 21 21 16.98 21 12C21 7.02 16.98 3 12 3Z" />
  </svg>
);
export const SkipBackward = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M12 5C12 4.17595 11.0592 3.70557 10.4 4.2L1.06667 11.2C0.533333 11.6 0.533333 12.4 1.06667 12.8L10.4 19.8C11.0592 20.2944 12 19.824 12 19V5ZM13.0667 11.2C12.5333 11.6 12.5333 12.4 13.0667 12.8L22.4 19.8C23.0592 20.2944 24 19.824 24 19V5C24 4.17595 23.0592 3.70557 22.4 4.2L13.0667 11.2Z" />
  </svg>
);
export const SkipForward = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M1.6 4.2C0.940764 3.70557 0 4.17595 0 5V19C0 19.824 0.940764 20.2944 1.6 19.8L10.9333 12.8C11.4667 12.4 11.4667 11.6 10.9333 11.2L1.6 4.2ZM12 12V19C12 19.824 12.9408 20.2944 13.6 19.8L22.9333 12.8C23.4667 12.4 23.4667 11.6 22.9333 11.2L13.6 4.2C12.9408 3.70557 12 4.17595 12 5V12Z" />
  </svg>
);
export const StepBackward = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M3 3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H7C7.55228 21 8 20.5523 8 20V4C8 3.44772 7.55228 3 7 3H3ZM9.42916 11.1425C8.78182 11.5309 8.78182 12.4691 9.42915 12.8575L21.4855 20.0913C22.152 20.4912 23 20.0111 23 19.2338V4.76619C23 3.9889 22.152 3.50878 21.4855 3.9087L9.42916 11.1425Z" />
  </svg>
);
export const StepForward = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M3.5145 3.9087C2.84797 3.50878 2 3.9889 2 4.76619V19.2338C2 20.0111 2.84797 20.4912 3.5145 20.0913L15.5708 12.8575C16.2182 12.4691 16.2182 11.5309 15.5708 11.1425L3.5145 3.9087ZM17 12V20C17 20.5523 17.4477 21 18 21H22C22.5523 21 23 20.5523 23 20V4C23 3.44772 22.5523 3 22 3H18C17.4477 3 17 3.44772 17 4V12Z" />
  </svg>
);
export const Stop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3H4Z" />
  </svg>
);
