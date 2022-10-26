import * as React from "react";
import {SVGProps} from "react";

export const PowerStandby = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M11 0V12H14V0H11ZM7.16 4.32L6.02 5.25C3.59 7.17 2 10.17 2 13.5C2 19.29 6.71 24 12.5 24C18.29 24 23 19.29 23 13.5C23 10.17 21.41 7.17 18.98 5.25L17.84 4.32L15.95 6.66L17.09 7.59C18.83 8.97 20 11.1 20 13.5C20 17.67 16.67 21 12.5 21C8.33 21 5 17.67 5 13.5C5 11.1 6.08 8.97 7.82 7.59L9.05 6.66L7.16 4.32V4.32Z" />
  </svg>
);
