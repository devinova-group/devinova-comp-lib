import * as React from "react";
import { SVGProps } from "react";

const SvgRandom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#random_svg__a)">
      <path d="M19.6 1.2A1 1 0 0 0 18 2a1 1 0 0 1-1 1h-.5c-1.05 0-1.68.3-2.34 1.14l-3.478 4.39a1 1 0 0 1-1.542.031L5.34 4.14C4.68 3.36 4.02 3 3 3H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2c-.143 0 .155.167.248.276l4.194 4.913a1 1 0 0 1 .018 1.277L3.3 17.628a1 1 0 0 1-.778.372H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2c1.05 0 1.68-.3 2.34-1.14l3.84-4.795a1 1 0 0 1 1.536-.03l4.194 4.825c.66.78 1.32 1.14 2.34 1.14a.75.75 0 0 1 .75.75V22a1 1 0 0 0 1.6.8l3.333-2.5a1 1 0 0 0 0-1.6L19.6 16.2a1 1 0 0 0-1.6.8v.533a.467.467 0 0 1-.467.467h-.135a.163.163 0 0 1-.1-.035c-.065-.049-.183-.108-.237-.171l-4.617-5.435a1 1 0 0 1-.018-1.273L16.2 6.375A1 1 0 0 1 16.98 6H17a1 1 0 0 1 1 1 1 1 0 0 0 1.6.8l3.333-2.5a1 1 0 0 0 0-1.6L19.6 1.2Z" />
    </g>
    <defs>
      <clipPath id="random_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgRandom;
