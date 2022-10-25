import * as React from "react";
import {SVGProps} from "react";

export const Shield = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15334)">
      <path d="M12 0C12 0 12 0 12 0L11.43 0.27L0.93 4.68L0.857641 4.71034C0.338079 4.92822 0 5.4366 0 6V6C0 10.98 2.01 15.36 4.41 18.57C5.61 20.16 6.9 21.48 8.16 22.41C9.42 23.34 10.65 24 12 24C13.38 24 14.58 23.34 15.84 22.41C17.1 21.48 18.39 20.16 19.59 18.57C21.99 15.36 24 10.98 24 6V6C24 5.4366 23.6619 4.92822 23.1424 4.71034L23.07 4.68L12.57 0.27L12 0C12 0 12 0 12 0V0ZM12 3.27V19C12 20.1046 11.1011 20.8095 10.1879 20.1881C10.1324 20.1504 10.0764 20.111 10.02 20.07C9.03 19.35 7.89 18.18 6.84 16.8C5.16462 14.5749 3.80904 11.596 3.33135 8.38149C3.20565 7.53556 3.71079 6.73974 4.50069 6.41196L11.9723 3.3115C11.9891 3.30454 12 3.28816 12 3.27V3.27Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15334">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
