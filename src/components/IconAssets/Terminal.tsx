import * as React from "react";
import {SVGProps} from "react";

export const Terminal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M2 2C0.895431 2 0 2.89543 0 4V21C0 22.1046 0.895431 23 2 23H19C20.1046 23 21 22.1046 21 21V15.8513C21 14.515 19.3843 13.8457 18.4393 14.7907V14.7907C18.158 15.072 18 15.4535 18 15.8513V18C18 19.1046 17.1046 20 16 20H5C3.89543 20 3 19.1046 3 18V7C3 5.89543 3.89543 5 5 5H13.1487C13.5465 5 13.928 4.84196 14.2093 4.56066V4.56066C15.1543 3.61571 14.485 2 13.1487 2H2ZM22.4142 3.41421C21.6332 2.63317 20.3668 2.63317 19.5858 3.41421L13.4142 9.58579C12.6332 10.3668 11.3668 10.3668 10.5858 9.58579L10.4142 9.41421C9.63317 8.63317 8.36684 8.63316 7.58579 9.41421L7.41421 9.58579C6.63317 10.3668 6.63316 11.6332 7.41421 12.4142L10.5858 15.5858C11.3668 16.3668 12.6332 16.3668 13.4142 15.5858L22.5858 6.41421C23.3668 5.63317 23.3668 4.36684 22.5858 3.58579L22.4142 3.41421Z" />
  </svg>
);
