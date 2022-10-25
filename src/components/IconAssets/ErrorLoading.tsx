import * as React from "react";
import {SVGProps} from "react";

export const ErrorLoading = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 64 64"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path
      d="M64 32c0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0c17.673 0 32 14.327 32 32ZM9.88 32c0 12.216 9.904 22.12 22.12 22.12 12.216 0 22.12-9.904 22.12-22.12 0-12.216-9.904-22.12-22.12-22.12C19.784 9.88 9.88 19.784 9.88 32Z"
      fill="#FFF4FF"
    />
    <path
      d="M64 32c0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0c17.673 0 32 14.327 32 32ZM9.88 32c0 12.216 9.904 22.12 22.12 22.12 12.216 0 22.12-9.904 22.12-22.12 0-12.216-9.904-22.12-22.12-22.12C19.784 9.88 9.88 19.784 9.88 32Z"
      fill="#F03738"
    />
    <g clipPath="url(#errorLoading_svg__a)">
      <path
        d="M25.408 21.707a1 1 0 0 0-1.414 0l-2.287 2.287a1 1 0 0 0 0 1.414l1.183 1.183 3.977 4.044a1 1 0 0 1-.006 1.409l-3.971 3.971-1.16 1.112a1 1 0 0 0-.023 1.421l2.287 2.336a1 1 0 0 0 1.422.008l1.175-1.176 4.038-4.038a1 1 0 0 1 1.42.006l3.966 4.032 1.105 1.153a1 1 0 0 0 1.429.015l2.335-2.335a1 1 0 0 0-.015-1.43l-1.153-1.104-4.032-3.965a1 1 0 0 1-.006-1.42l4.038-4.039 1.176-1.175a1 1 0 0 0-.008-1.422l-2.336-2.287a1 1 0 0 0-1.421.023l-1.112 1.16-3.971 3.971a1 1 0 0 1-1.409.006l-4.044-3.977-1.183-1.183Z"
        fill="#C12945"
      />
    </g>
    <defs>
      <clipPath id="errorLoading_svg__a">
        <path fill="#fff" transform="translate(21 21)" d="M0 0h21v21H0z" />
      </clipPath>
    </defs>
  </svg>
);
