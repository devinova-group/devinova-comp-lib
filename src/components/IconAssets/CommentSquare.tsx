import React from "react";
import {SVGProps} from "react";

export const CommentSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height={props.height ? props.height : 24}
    role="img"
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_511_15424)">
      <path d="M0.285 -0.0152734C0.275396 -0.0056691 0.262308 -0.000443795 0.248746 0.000301507C0.0829154 0.00941468 0 0.125751 0 0.269727V17.6997C0 17.8497 0.12 17.9697 0.27 17.9697H17.5858C17.851 17.9697 18.1054 18.0751 18.2929 18.2626L22.2929 22.2626C22.9229 22.8926 24 22.4464 24 21.5555V0.239727C24 0.0597266 23.88 -0.0302734 23.73 -0.0302734H0.321213C0.307631 -0.0302734 0.294604 -0.0248778 0.285 -0.0152734V-0.0152734Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15424">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
