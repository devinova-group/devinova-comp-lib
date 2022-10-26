import * as React from "react";
import {SVGProps} from "react";

export const Ascending = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15331)">
      <path d="M7 0C6.44772 0 6 0.447715 6 1V17C6 17.5523 5.55228 18 5 18H2.85078C1.9055 18 1.48795 19.1904 2.22609 19.7809L6.8753 23.5002C7.24052 23.7924 7.75948 23.7924 8.1247 23.5002L12.7739 19.7809C13.5121 19.1904 13.0945 18 12.1492 18H10C9.44772 18 9 17.5523 9 17V1C9 0.447716 8.55228 0 8 0H7ZM13 0C12.4477 0 12 0.447715 12 1V2C12 2.55228 12.4477 3 13 3H17C17.5523 3 18 2.55228 18 2V1C18 0.447715 17.5523 0 17 0H13ZM13 6C12.4477 6 12 6.44772 12 7V8C12 8.55228 12.4477 9 13 9H20C20.5523 9 21 8.55228 21 8V7C21 6.44772 20.5523 6 20 6H13ZM13 12C12.4477 12 12 12.4477 12 13V14C12 14.5523 12.4477 15 13 15H23C23.5523 15 24 14.5523 24 14V13C24 12.4477 23.5523 12 23 12H13Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15331">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const Descending = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15330)">
      <path d="M7 0C6.44772 0 6 0.447715 6 1V17C6 17.5523 5.55228 18 5 18H2.85078C1.9055 18 1.48795 19.1904 2.22609 19.7809L6.8753 23.5002C7.24052 23.7924 7.75948 23.7924 8.1247 23.5002L12.7739 19.7809C13.5121 19.1904 13.0945 18 12.1492 18H10C9.44772 18 9 17.5523 9 17V1C9 0.447716 8.55228 0 8 0H7ZM13 0C12.4477 0 12 0.447715 12 1V2C12 2.55228 12.4477 3 13 3H23C23.5523 3 24 2.55228 24 2V1C24 0.447715 23.5523 0 23 0H13ZM13 6C12.4477 6 12 6.44772 12 7V8C12 8.55228 12.4477 9 13 9H20C20.5523 9 21 8.55228 21 8V7C21 6.44772 20.5523 6 20 6H13ZM13 12C12.4477 12 12 12.4477 12 13V14C12 14.5523 12.4477 15 13 15H17C17.5523 15 18 14.5523 18 14V13C18 12.4477 17.5523 12 17 12H13Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15330">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
