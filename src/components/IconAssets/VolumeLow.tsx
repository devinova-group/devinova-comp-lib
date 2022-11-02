import * as React from "react";
import { SVGProps } from "react";

const SvgVolumeLow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M13.709 0c-.43 0-.833.215-1.072.572L9.593 5.113A2 2 0 0 1 7.933 6H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.933a2 2 0 0 1 1.661.887l3.043 4.54A1.291 1.291 0 0 0 15 22.709V1.292C14.999.578 14.421 0 13.708 0Zm5.041 9.09c-.406-.101-.75.249-.75.667v4.485c0 .419.348.783.75.668A3.024 3.024 0 0 0 21 12c0-1.38-.93-2.58-2.25-2.91Z" />
  </svg>
);

export default SvgVolumeLow;
