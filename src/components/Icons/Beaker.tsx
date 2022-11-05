import * as React from "react";
import {SVGProps} from "react";

export const Beaker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15516)">
      <path d="M4.08 0.000227977C4.04006 0.000227977 4.0001 0.00301505 3.96094 0.0108759C3.58703 0.0859433 3.25417 0.299194 3.02963 0.609273C2.79334 0.935587 2.69635 1.3424 2.76 1.74023C2.82365 2.13805 3.04273 2.4943 3.36905 2.73059C3.67384 2.95131 4.04887 3.05048 4.42121 3.01073C4.47382 3.00511 4.52658 3.00023 4.57949 3.00023H5C5.55228 3.00023 6 3.44794 6 4.00023V6.98185C6 7.14496 5.96217 7.30194 5.8866 7.44648C5.23205 8.69837 2.29446 14.3392 1.02 16.5002C0.54 17.2802 0 18.3302 0 19.6802C0 20.8502 0.45 21.9902 1.23 22.7702C2.01 23.5502 3.15 24.0002 4.32 24.0002H19.71C20.8344 24.0002 21.9005 23.5332 22.6779 22.8008C22.6986 22.7813 22.7259 22.7702 22.7544 22.7702V22.7702C22.7836 22.7702 22.8117 22.7587 22.8321 22.7378C23.5923 21.9588 24.03 20.8341 24.03 19.6802C24.03 18.3302 23.46 17.2802 23.01 16.5002C21.7355 14.3392 18.798 8.69837 18.1434 7.44648C18.0678 7.30194 18.03 7.14496 18.03 6.98185V4.00023C18.03 3.44794 18.4777 3.00023 19.03 3.00023H19.53C19.9278 3.00023 20.3094 2.84219 20.5907 2.56089C20.872 2.27958 21.03 1.89805 21.03 1.50023C21.03 1.1024 20.872 0.720872 20.5907 0.439568C20.3094 0.158263 19.9278 0.000227978 19.53 0.000227978H4.53C4.46517 -0.00563084 4.40005 -0.00726051 4.33505 -0.00466104C4.28502 -0.00265978 4.23491 -0.00190591 4.18483 -0.00240111C4.14988 -0.00274681 4.11491 -0.00187045 4.08 0.000227977V0.000227977ZM9 4.00023C9 3.44794 9.44772 3.00023 10 3.00023H14C14.5523 3.00023 15 3.44794 15 4.00023V7.61743C15 7.79531 15.0527 7.96921 15.1513 8.11721V8.11721C15.1704 8.14587 15.1875 8.17492 15.2032 8.20556C15.3878 8.56556 16.6444 11.0133 17.9695 13.5276C18.3215 14.1954 17.8383 15.0002 17.0833 15.0002H6.91667C6.16175 15.0002 5.6785 14.1954 6.03047 13.5276C7.3556 11.0133 8.61216 8.56556 8.79676 8.20556C8.81248 8.17492 8.82958 8.14587 8.84868 8.11721V8.11721C8.94735 7.96921 9 7.79531 9 7.61743V4.00023Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15516">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);