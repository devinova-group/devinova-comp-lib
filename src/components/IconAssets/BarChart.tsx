import * as React from "react";
import {SVGProps} from "react";

export const BarChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M1.5 2C0.671573 2 0 2.67157 0 3.5V21C0 22.1046 0.895431 23 2 23H22.5C23.3284 23 24 22.3284 24 21.5V21.5C24 20.6716 23.3284 20 22.5 20H5C3.89543 20 3 19.1046 3 18V3.5C3 2.67157 2.32843 2 1.5 2V2ZM17 2C15.8954 2 15 2.89543 15 4V15C15 16.1046 15.8954 17 17 17H19C20.1046 17 21 16.1046 21 15V4C21 2.89543 20.1046 2 19 2H17ZM8 8C6.89543 8 6 8.89543 6 10V15C6 16.1046 6.89543 17 8 17H10C11.1046 17 12 16.1046 12 15V10C12 8.89543 11.1046 8 10 8H8Z" />
  </svg>
);
