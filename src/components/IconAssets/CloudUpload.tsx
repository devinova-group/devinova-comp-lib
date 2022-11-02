import * as React from "react";
import { SVGProps } from "react";

const SvgCloudUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#cloud-upload_svg__a)">
      <path d="M13.5 0c-3.344 0-6.307 2.19-7.292 5.209a1.26 1.26 0 0 1-1.024.847C2.266 6.457 0 8.976 0 12c0 .901.218 1.743.572 2.494.152.32.486.506.841.506h5.673a1 1 0 0 0 .707-.293l5-5a1 1 0 0 1 1.414 0l5 5a1 1 0 0 0 .707.293h3.123c.417 0 .803-.257.884-.665.053-.267.079-.542.079-.835 0-1.704-.962-3.385-2.366-4.202-.364-.212-.634-.578-.634-1V7.5C21 3.36 17.64 0 13.5 0Zm.707 14.207a1 1 0 0 0-1.414 0l-5.086 5.086c-.63.63-.184 1.707.707 1.707H11a1 1 0 0 1 1 1v.5a1.5 1.5 0 1 0 3 0V22a1 1 0 0 1 1-1h2.586c.89 0 1.337-1.077.707-1.707l-5.086-5.086Z" />
    </g>
    <defs>
      <clipPath id="cloud-upload_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCloudUpload;
