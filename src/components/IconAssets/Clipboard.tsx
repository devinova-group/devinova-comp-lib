import * as React from "react";
import { SVGProps } from "react";

const SvgClipboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M12.5 0c-.84 0-1.5.66-1.5 1.5V2a1 1 0 0 1-1 1H8.75c-.42 0-.75.33-.75.75V5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3.75c0-.42-.33-.75-.75-.75H15a1 1 0 0 1-1-1v-.5c0-.84-.66-1.5-1.5-1.5ZM2.75 3c-.42 0-.75.33-.75.75v19.5c0 .42.33.75.75.75h19.5c.42 0 .75-.33.75-.75V3.75c0-.42-.33-.75-.75-.75H21a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 0-1-1H2.75Z" />
  </svg>
);

export default SvgClipboard;
