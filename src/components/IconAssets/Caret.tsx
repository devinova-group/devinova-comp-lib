import * as React from "react";
import {SVGProps} from "react";

export const CaretBottom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M4.82843 6C3.04662 6 2.15428 8.15428 3.41421 9.41421L10.5858 16.5858C11.3668 17.3668 12.6332 17.3668 13.4142 16.5858L20.5858 9.41422C21.8457 8.15429 20.9534 6 19.1716 6H4.82843Z" />
  </svg>
);
export const CaretLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M18 4.82843C18 3.04662 15.8457 2.15428 14.5858 3.41421L7.41421 10.5858C6.63317 11.3668 6.63317 12.6332 7.41421 13.4142L14.5858 20.5858C15.8457 21.8457 18 20.9534 18 19.1716V4.82843Z" />
  </svg>
);
export const CaretRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M9.41422 3.41422C8.15429 2.15429 6 3.04662 6 4.82843V19.1716C6 20.9534 8.15428 21.8457 9.41421 20.5858L16.5858 13.4142C17.3668 12.6332 17.3668 11.3668 16.5858 10.5858L9.41422 3.41422Z" />
  </svg>
);
export const CaretTop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M12.7071 6.70711C12.3166 6.31658 11.6834 6.31658 11.2929 6.70711L1.70711 16.2929C1.07714 16.9229 1.52331 18 2.41421 18H21.5858C22.4767 18 22.9229 16.9229 22.2929 16.2929L12.7071 6.70711Z" />
  </svg>
);
