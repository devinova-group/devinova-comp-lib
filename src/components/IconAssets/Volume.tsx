import * as React from "react";
import {SVGProps} from "react";

export const VolumeHigh = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15309)">
      <path d="M10.02 0L6 6H0V18H6L10.02 24H12V0H10.02ZM15 3V6C15.51 6 16.02 6.06 16.5 6.18C19.08 6.84 21 9.18 21 12C21 14.82 19.11 17.16 16.5 17.82C16.02 17.94 15.51 18 15 18V21C15.75 21 16.44 20.88 17.16 20.73H17.25C21.15 19.74 24 16.2 24 12C24 7.8 21.15 4.26 17.25 3.27C16.56 3.09 15.78 3 15 3ZM15 9V15C15.27 15 15.54 14.97 15.75 14.91C17.04 14.58 18 13.38 18 12C18 10.62 17.07 9.42 15.75 9.09C15.51 9.03 15.24 9 15 9Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15309">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export const VolumeLow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M13.709 0C13.2784 0 12.8762 0.214681 12.6365 0.572406L9.59413 5.11323C9.22283 5.66742 8.59967 6 7.93259 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H7.93259C8.59967 18 9.22283 18.3326 9.59413 18.8868L12.6365 23.4276C12.8762 23.7853 13.2784 24 13.709 24V24C14.422 24 15 23.422 15 22.709V1.29099C15 0.577996 14.422 0 13.709 0V0ZM18.75 9.09C18.3443 8.98858 18 9.33899 18 9.75717V14.2424C18 14.6608 18.3477 15.025 18.75 14.91V14.91C20.04 14.58 21 13.38 21 12C21 10.62 20.07 9.42 18.75 9.09V9.09Z" />
  </svg>
);
export const VolumeOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M16.709 0C16.2784 0 15.8762 0.214681 15.6365 0.572406L12.5941 5.11323C12.2228 5.66742 11.5997 6 10.9326 6H8C6.89543 6 6 6.89543 6 8V16C6 17.1046 6.89543 18 8 18H10.9326C11.5997 18 12.2228 18.3326 12.5941 18.8868L15.6365 23.4276C15.8762 23.7853 16.2784 24 16.709 24V24C17.422 24 18 23.422 18 22.709V1.29099C18 0.577996 17.422 0 16.709 0V0Z" />
  </svg>
);
