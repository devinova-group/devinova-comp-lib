import * as React from "react";
import {SVGProps} from "react";

export const CreaditCard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M0.75 3C0.33 3 0 3.33 0 3.75V6H24V3.75C24 3.33 23.67 3 23.25 3H0.75ZM0 9V20.25C0 20.67 0.33 21 0.75 21H23.25C23.67 21 24 20.67 24 20.25V9H0ZM3 15H6V18H3V15ZM9 15H12V18H9V15Z" />
  </svg>
);
