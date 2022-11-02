import * as React from "react";
import { SVGProps } from "react";

const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M19.952 3.707a1 1 0 0 0-1.421.023L17.16 5.16l-7.646 7.646a1 1 0 0 1-1.4.013L6.39 11.16 4.937 9.707a1 1 0 0 0-1.414 0L.707 12.523a1 1 0 0 0 0 1.414L2.16 15.39l4.5 4.5 1.363 1.422a1 1 0 0 0 1.43.016l1.437-1.438 10.5-10.5 1.445-1.445a1 1 0 0 0-.007-1.422l-2.876-2.816Z" />
  </svg>
);

export default SvgCheck;
