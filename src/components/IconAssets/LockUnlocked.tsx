import * as React from "react";
import { SVGProps } from "react";

const SvgLockUnlocked = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M12 0C9.039 0 6.561 2.174 6.083 5.004 5.991 5.55 6.448 6 7 6h1c.552 0 .983-.46 1.16-.983A2.967 2.967 0 0 1 12 3c1.68 0 3 1.32 3 3v5a1 1 0 0 1-1 1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1V6c0-3.3-2.7-6-6-6Z" />
  </svg>
);

export default SvgLockUnlocked;
