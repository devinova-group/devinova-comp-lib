import * as React from "react";
import { SVGProps } from "react";

const SvgFlash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M11.118 0a1 1 0 0 0-.894.553l-3.5 7A1 1 0 0 0 7.618 9h2.999a1 1 0 0 1 .95 1.313l-1.32 4a1 1 0 0 1-.95.687h-1.91a1 1 0 0 0-.948 1.316l2.05 6.149a1 1 0 0 0 1.655.39l6.149-6.148c.63-.63.184-1.707-.707-1.707h-.468a1 1 0 0 1-.894-1.447l3.052-6.106A1 1 0 0 0 16.382 6h-2.764a1 1 0 0 1-.894-1.447l1.552-3.106A1 1 0 0 0 13.382 0h-2.264Z" />
  </svg>
);

export default SvgFlash;
