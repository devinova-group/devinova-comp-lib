import * as React from "react";
import { SVGProps } from "react";

const SvgAudioSpectrum = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M13.5 0A1.5 1.5 0 0 0 12 1.5v21a1.5 1.5 0 0 0 3 0v-21A1.5 1.5 0 0 0 13.5 0Zm-6 3A1.5 1.5 0 0 0 6 4.5v15a1.5 1.5 0 0 0 3 0v-15A1.5 1.5 0 0 0 7.5 3Zm12 3A1.5 1.5 0 0 0 18 7.5v9a1.5 1.5 0 0 0 3 0v-9A1.5 1.5 0 0 0 19.5 6Zm-18 3A1.5 1.5 0 0 0 0 10.5v3a1.5 1.5 0 0 0 3 0v-3A1.5 1.5 0 0 0 1.5 9Z" />
  </svg>
);

export default SvgAudioSpectrum;
