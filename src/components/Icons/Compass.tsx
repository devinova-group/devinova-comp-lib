import * as React from "react";
import {SVGProps} from "react";

export const Compass = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15423)">
      <path d="M12 0C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24C18.6 24 24 18.6 24 12C24 5.4 18.6 0 12 0ZM12 3C16.98 3 21 7.02 21 12C21 16.98 16.98 21 12 21C7.02 21 3 16.98 3 12C3 7.02 7.02 3 12 3ZM17.3675 7.89736C17.6281 7.11561 16.8844 6.37187 16.1026 6.63246L9.47434 8.84189C9.17574 8.94142 8.94142 9.17574 8.84189 9.47434L6.63245 16.1026C6.37187 16.8844 7.11561 17.6281 7.89737 17.3675L14.5257 15.1581C14.8243 15.0586 15.0586 14.8243 15.1581 14.5257L17.3675 7.89736ZM12 10.5C12.84 10.5 13.5 11.16 13.5 12C13.5 12.84 12.84 13.5 12 13.5C11.16 13.5 10.5 12.84 10.5 12C10.5 11.16 11.16 10.5 12 10.5Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15423">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
