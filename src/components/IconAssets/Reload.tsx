import * as React from "react";
import { SVGProps } from "react";

const SvgReload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#reload_svg__a)">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12c2.945 0 5.699-1.027 7.792-2.805.42-.355.414-.989.026-1.377l-.75-.75c-.391-.391-1.021-.386-1.453-.041A8.993 8.993 0 0 1 11.97 21c-4.98 0-9-4.02-9-9s4.02-9 9-9c2.134 0 4.025.793 5.542 2.058.421.352.415.985.027 1.373l-.862.862c-.63.63-.184 1.707.707 1.707h5.586a1 1 0 0 0 1-1V2.414c0-.89-1.077-1.337-1.707-.707l-1.156 1.156c-.39.39-1.021.387-1.441.029C17.589 1.119 14.91 0 11.97 0H12Z" />
    </g>
    <defs>
      <clipPath id="reload_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgReload;
