import * as React from "react";
import { SVGProps } from "react";

const SvgLockLocked = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M12 2C8.7 2 6 4.7 6 8v2a1 1 0 0 1-1 1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1V8c0-3.3-2.7-6-6-6Zm0 3c1.68 0 3 1.32 3 3v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V8c0-1.68 1.32-3 3-3Z" />
  </svg>
);

export default SvgLockLocked;
