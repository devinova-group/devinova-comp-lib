import * as React from "react";
import { SVGProps } from "react";

const SvgVolumeOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M16.709 0c-.43 0-.833.215-1.072.572l-3.043 4.541A2 2 0 0 1 10.933 6H8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.933a2 2 0 0 1 1.661.887l3.043 4.54A1.291 1.291 0 0 0 18 22.709V1.292C17.999.578 17.421 0 16.708 0Z" />
  </svg>
);

export default SvgVolumeOff;
