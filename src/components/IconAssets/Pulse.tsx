import * as React from "react";
import { SVGProps } from "react";

const SvgPulse = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#pulse_svg__a)">
      <path d="M9.75 1 8.34 5.59l-2.284 7.495a.077.077 0 0 1-.142.012.077.077 0 0 1-.006-.015l-.071-.268a1 1 0 0 0-.967-.744H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1.755a1 1 0 0 1 .95.689l.915 2.791.448 1.4c.297.93 1.615.927 1.907-.005l.465-1.485 1.385-4.44c.292-.936 1.618-.936 1.91 0l1.385 4.44.415 1.357c.275.897 1.522.957 1.88.09l.525-1.267 1.5-3.736a.314.314 0 0 1 .576-.016c.051.111.162.182.284.182h5.73a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-3.456a1 1 0 0 1-.892-.548L17.82 9.82l-.494-.958a1 1 0 0 0-1.818.088L15.09 10l-.375.95c-.346.875-1.6.83-1.883-.067L11.16 5.59 9.75 1Z" />
    </g>
    <defs>
      <clipPath id="pulse_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPulse;
