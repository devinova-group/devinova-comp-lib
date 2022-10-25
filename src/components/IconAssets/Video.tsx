import * as React from "react";
import {SVGProps} from "react";

export const Video = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M1.5 5C0.66 5 0 5.69 0 6.5V18.5C0 19.34 0.69 20 1.5 20H16.5C17.34 20 18 19.34 18 18.5V16.4142C18 15.5233 19.0771 15.0771 19.7071 15.7071L20.7071 16.7071C20.8946 16.8946 21.149 17 21.4142 17H23C23.5523 17 24 16.5523 24 16V9C24 8.44772 23.5523 8 23 8H21.4142C21.149 8 20.8946 8.10536 20.7071 8.29289L19.7071 9.29289C19.0771 9.92286 18 9.47669 18 8.58579V6.5C18 5.66 17.34 5 16.5 5H1.5Z" />
  </svg>
);
