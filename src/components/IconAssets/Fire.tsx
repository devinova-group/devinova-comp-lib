import * as React from "react";
import {SVGProps} from "react";

export const Fire = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M8.445 1.727c-.718-.64-1.757.22-1.86 1.175C6.13 7.14 0 10.048 0 15c0 3.382 1.907 5.811 3.57 7.287.718.636 1.758-.22 1.866-1.172C5.916 16.899 12 13.95 12 9c0-3.372-1.895-5.796-3.555-7.273Zm9 9c-.718-.64-1.757.22-1.86 1.175-.423 3.945-5.767 6.739-6.501 11.102-.092.544.364.996.916.996h8c1.2 0 3-1.5 3-6 0-3.372-1.895-5.796-3.555-7.273Z" />
  </svg>
);
