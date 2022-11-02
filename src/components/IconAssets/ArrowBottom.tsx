import * as React from "react";
import { SVGProps } from "react";

const SvgArrowBottom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M12 0a1 1 0 0 0-1 1v13a1 1 0 0 1-1 1H7.151a1 1 0 0 0-.764 1.645l5.43 6.438a1 1 0 0 0 1.536-.01l5.3-6.437A1 1 0 0 0 17.881 15H15a1 1 0 0 1-1-1V1a1 1 0 0 0-1-1h-1Z" />
  </svg>
);

export default SvgArrowBottom;
