import * as React from "react";
import {SVGProps} from "react";

export const Redo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M10.5 3C4.71 3 0 7.71 0 13.5C0 9.36 3.36 6 7.5 6C11.64 6 15 9.36 15 13.5V14.1213C15 14.6066 14.6066 15 14.1213 15V15C13.3385 15 12.9465 15.9465 13.5 16.5L17.2929 20.2929C17.6834 20.6834 18.3166 20.6834 18.7071 20.2929L22.5 16.5C23.0535 15.9465 22.6615 15 21.8787 15V15C21.3934 15 21 14.6066 21 14.1213V13.5C21 7.71 16.29 3 10.5 3Z" />
  </svg>
);
export const Undo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M13.5 3C7.71 3 3 7.71 3 13.5V14.1213C3 14.6066 2.6066 15 2.12132 15V15C1.3385 15 0.946463 15.9465 1.5 16.5L5.29289 20.2929C5.68342 20.6834 6.31658 20.6834 6.70711 20.2929L10.5 16.5C11.0535 15.9465 10.6615 15 9.87868 15V15C9.3934 15 9 14.6066 9 14.1213V13.5C9 9.36 12.36 6 16.5 6C20.64 6 24 9.36 24 13.5C24 7.71 19.29 3 13.5 3Z" />
  </svg>
);
