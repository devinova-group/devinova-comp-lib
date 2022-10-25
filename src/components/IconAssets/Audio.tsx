import * as React from "react";
import {SVGProps} from "react";

export const Audio = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clipPath="url(#audio_svg__a)">
      <path d="M3.48 3A11.854 11.854 0 0 0 0 11.43c0 3.3 1.29 6.36 3.48 8.52l2.16-2.16A8.996 8.996 0 0 1 3 11.4c0-2.49.99-4.65 2.64-6.27L3.48 2.97V3Zm17.07 0-2.16 2.16c1.62 1.62 2.64 3.78 2.64 6.27 0 2.49-.99 4.74-2.64 6.39l2.16 2.16c2.16-2.16 3.48-5.22 3.48-8.52s-1.29-6.27-3.48-8.43V3ZM7.8 7.23a5.988 5.988 0 0 0-1.77 4.23c0 1.65.69 3.24 1.77 4.32l2.07-2.16c-.54-.54-.84-1.32-.84-2.16 0-.84.3-1.5.84-2.07L7.8 7.23Zm8.43 0-2.07 2.16c.54.54.84 1.23.84 2.07 0 .84-.3 1.62-.84 2.16l2.07 2.16C17.31 14.7 18 13.11 18 11.46c0-1.65-.69-3.15-1.77-4.23Z" />
    </g>
    <defs>
      <clipPath id="audio_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export const AudioSpectrum = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M13.5 0C12.6716 0 12 0.671573 12 1.5V22.5C12 23.3284 12.6716 24 13.5 24V24C14.3284 24 15 23.3284 15 22.5V1.5C15 0.671573 14.3284 0 13.5 0V0ZM7.5 3C6.67157 3 6 3.67157 6 4.5V19.5C6 20.3284 6.67157 21 7.5 21V21C8.32843 21 9 20.3284 9 19.5V4.5C9 3.67157 8.32843 3 7.5 3V3ZM19.5 6C18.6716 6 18 6.67157 18 7.5V16.5C18 17.3284 18.6716 18 19.5 18V18C20.3284 18 21 17.3284 21 16.5V7.5C21 6.67157 20.3284 6 19.5 6V6ZM1.5 9C0.671573 9 0 9.67157 0 10.5V13.5C0 14.3284 0.671573 15 1.5 15V15C2.32843 15 3 14.3284 3 13.5V10.5C3 9.67157 2.32843 9 1.5 9V9Z" />
  </svg>
);
