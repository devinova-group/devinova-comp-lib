import * as React from "react";
import { SVGProps } from "react";

const SvgResizeWidth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M9 7.135a1 1 0 0 0-1.64-.768L.922 11.732a1 1 0 0 0 0 1.536l6.438 5.365A1 1 0 0 0 9 17.865V15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2.865a1 1 0 0 0 1.64.768l6.438-5.365a1 1 0 0 0 0-1.536L16.64 6.367a1 1 0 0 0-1.64.768V10a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V7.135Z" />
  </svg>
);

export default SvgResizeWidth;
