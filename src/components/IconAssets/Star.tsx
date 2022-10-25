import * as React from "react";
import {SVGProps} from "react";

export const Star = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15328)">
      <path d="M12.9487 2.84605C12.6448 1.93435 11.3552 1.93435 11.0513 2.84605L9.22792 8.31623C9.09181 8.72457 8.70967 9 8.27924 9H2.85078C1.9055 9 1.48795 10.1904 2.22609 10.7809L6.95551 14.5644C7.28266 14.8261 7.41199 15.264 7.2795 15.6615L5.57082 20.7875C5.25569 21.7329 6.36606 22.5072 7.1442 21.8846L11.3753 18.4998C11.7405 18.2076 12.2595 18.2076 12.6247 18.4998L16.8558 21.8846C17.6339 22.5072 18.7443 21.7329 18.4292 20.7875L16.7205 15.6615C16.588 15.264 16.7173 14.8261 17.0445 14.5644L21.7739 10.7809C22.5121 10.1904 22.0945 9 21.1492 9H15.7208C15.2903 9 14.9082 8.72457 14.7721 8.31623L12.9487 2.84605Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15328">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
