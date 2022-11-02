import * as React from "react";
import { SVGProps } from "react";

const SvgInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M15 0c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3Zm-4.5 7.5a4.494 4.494 0 0 0-4.39 3.508c-.122.539.338.992.89.992h1c.552 0 .976-.494 1.315-.93a1.49 1.49 0 0 1 1.185-.57c.84 0 1.5.66 1.5 1.5s-3 4.92-3 7.5 2.01 4.5 4.5 4.5a4.494 4.494 0 0 0 4.39-3.508c.122-.539-.338-.992-.89-.992h-1c-.552 0-.976.494-1.315.93A1.49 1.49 0 0 1 13.5 21c-.84 0-1.5-.66-1.5-1.5 0-1.08 3-5.52 3-7.5 0-2.43-2.01-4.5-4.5-4.5Z" />
  </svg>
);

export default SvgInfo;
