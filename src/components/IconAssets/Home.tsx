import * as React from "react";
import { SVGProps } from "react";

const SvgHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M12.6 2.45a1 1 0 0 0-1.2 0l-9.6 7.2c-.577.432-.27 1.35.45 1.35a.75.75 0 0 1 .75.75V22a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V11.649c0-.405.334-.729.738-.717.7.021 1.012-.87.452-1.29L12.6 2.45Z" />
  </svg>
);

export default SvgHome;
