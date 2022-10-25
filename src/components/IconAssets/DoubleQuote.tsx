import * as React from "react";
import {SVGProps} from "react";

export const SansLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M1 3C0.447715 3 0 3.44772 0 4V18.5858C0 19.4767 1.07714 19.9229 1.70711 19.2929L8.70711 12.2929C8.89464 12.1054 9 11.851 9 11.5858V4C9 3.44772 8.55228 3 8 3H1ZM16 3C15.4477 3 15 3.44772 15 4V18.5858C15 19.4767 16.0771 19.9229 16.7071 19.2929L23.7071 12.2929C23.8946 12.1054 24 11.851 24 11.5858V4C24 3.44772 23.5523 3 23 3H16Z" />
  </svg>
);
export const SansRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M9 5.41421C9 4.52331 7.92286 4.07714 7.29289 4.70711L0.292892 11.7071C0.105356 11.8946 0 12.149 0 12.4142V20C0 20.5523 0.447715 21 1 21H8C8.55228 21 9 20.5523 9 20V5.41421ZM24 5.41421C24 4.52331 22.9229 4.07714 22.2929 4.70711L15.2929 11.7071C15.1054 11.8946 15 12.149 15 12.4142V20C15 20.5523 15.4477 21 16 21H23C23.5523 21 24 20.5523 24 20V5.41421Z" />
  </svg>
);
export const SerifLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M9 3C4.05 3 0 7.05 0 12V21H9V12H3C3 8.67 5.67 6 9 6V3ZM24 3C19.05 3 15 7.05 15 12V21H24V12H18C18 8.67 20.67 6 24 6V3Z" />
  </svg>
);
export const SerifRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M1 3C0.447715 3 0 3.44772 0 4V11C0 11.5523 0.447715 12 1 12H5C5.55228 12 6.00873 12.451 5.91885 12.9959C5.50202 15.5231 3.52305 17.502 0.995941 17.9188C0.451019 18.0087 0 18.4477 0 19V20C0 20.5523 0.449469 21.0059 0.998343 20.9446C5.48313 20.4439 9 16.6127 9 12V4C9 3.44772 8.55228 3 8 3H1ZM16 3C15.4477 3 15 3.44772 15 4V11C15 11.5523 15.4477 12 16 12H20C20.5523 12 21.0087 12.451 20.9188 12.9959C20.502 15.5231 18.523 17.502 15.9959 17.9188C15.451 18.0087 15 18.4477 15 19V20C15 20.5523 15.4495 21.0059 15.9983 20.9446C20.4831 20.4439 24 16.6127 24 12V4C24 3.44772 23.5523 3 23 3H16Z" />
  </svg>
);
