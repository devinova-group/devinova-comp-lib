import * as React from "react";
import {SVGProps} from "react";

export const Reload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15343)">
      <path d="M12 0C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24C14.9449 24 17.6986 22.9727 19.7922 21.1953C20.2112 20.8396 20.2064 20.2064 19.8178 19.8178L19.0671 19.0671C18.6766 18.6766 18.0465 18.6816 17.6153 19.0267C16.0807 20.2548 14.124 21 11.97 21C6.99 21 2.97 16.98 2.97 12C2.97 7.02 6.99 3 11.97 3C14.1037 3 15.9951 3.79306 17.5121 5.05826C17.9335 5.40971 17.9273 6.04266 17.5394 6.43065L16.6771 7.29289C16.0471 7.92286 16.4933 9 17.3842 9H22.97C23.5223 9 23.97 8.55228 23.97 8V2.41421C23.97 1.52331 22.8929 1.07714 22.2629 1.70711L21.1071 2.86289C20.7166 3.25342 20.0859 3.25001 19.6657 2.89153C17.5889 1.11948 14.9104 0 11.97 0H12Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15343">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
