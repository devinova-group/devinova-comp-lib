import * as React from "react";
import {SVGProps} from "react";

export const Info = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M15 0C13.35 0 12 1.35 12 3C12 4.65 13.35 6 15 6C16.65 6 18 4.65 18 3C18 1.35 16.65 0 15 0ZM10.5 7.5C8.35108 7.5 6.55966 8.99706 6.10921 11.0077C5.98847 11.5466 6.44772 12 7 12H8C8.55228 12 8.97558 11.5056 9.31539 11.0703C9.58791 10.7211 10.0138 10.5 10.5 10.5C11.34 10.5 12 11.16 12 12C12 12.84 9 16.92 9 19.5C9 22.08 11.01 24 13.5 24C15.6489 24 17.4403 22.5029 17.8908 20.4923C18.0115 19.9534 17.5523 19.5 17 19.5H16C15.4477 19.5 15.0244 19.9944 14.6846 20.4297C14.4121 20.7789 13.9862 21 13.5 21C12.66 21 12 20.34 12 19.5C12 18.42 15 13.98 15 12C15 9.57 12.99 7.5 10.5 7.5Z" />
  </svg>
);
