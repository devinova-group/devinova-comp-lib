import * as React from "react";
import {SVGProps} from "react";

export const Elevator = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M12.7071 0.707106C12.3166 0.316582 11.6834 0.316583 11.2929 0.707107L4.7071 7.2929C4.07714 7.92286 4.52331 9 5.41421 9H18.5858C19.4767 9 19.9229 7.92286 19.2929 7.29289L12.7071 0.707106ZM5.41421 15C4.52331 15 4.07714 16.0771 4.70711 16.7071L11.2929 23.2929C11.6834 23.6834 12.3166 23.6834 12.7071 23.2929L19.2929 16.7071C19.9229 16.0771 19.4767 15 18.5858 15H5.41421Z" />
  </svg>
);
