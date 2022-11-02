import * as React from "react";
import { SVGProps } from "react";

const SvgCloudDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#cloud-download_svg__a)">
      <path d="M13.5 0c-3.344 0-6.307 2.19-7.292 5.209a1.26 1.26 0 0 1-1.024.847C2.266 6.457 0 8.976 0 12c0 .901.218 1.743.572 2.494.152.32.486.506.841.506H8a1 1 0 0 0 1-1v-.5C9 11.01 11.01 9 13.5 9s4.5 2.01 4.5 4.5v.5a1 1 0 0 0 1 1h4.037c.417 0 .803-.257.884-.665.053-.267.079-.542.079-.835 0-1.704-.962-3.385-2.366-4.202-.364-.212-.634-.578-.634-1V7.5C21 3.36 17.64 0 13.5 0Zm-.45 12c-.02 0-.04.003-.058.01A1.5 1.5 0 0 0 12 13.5V17a1 1 0 0 1-1 1H9.914c-.89 0-1.337 1.077-.707 1.707l3.586 3.586a1 1 0 0 0 1.414 0l3.586-3.586c.63-.63.184-1.707-.707-1.707H16a1 1 0 0 1-1-1v-3.5a1.5 1.5 0 0 0-1.65-1.517 2.982 2.982 0 0 1-.3.017Z" />
    </g>
    <defs>
      <clipPath id="cloud-download_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCloudDownload;
