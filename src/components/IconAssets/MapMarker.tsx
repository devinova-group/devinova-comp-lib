import * as React from "react";
import { SVGProps } from "react";

const SvgMapMarker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M12 0C7.02 0 3 4.02 3 9c0 4.523 5.115 10.752 7.633 13.544.74.82 1.994.82 2.734 0C15.885 19.752 21 13.524 21 9c0-4.98-4.02-9-9-9Zm0 3c3.33 0 6 2.7 6 6 0 3.33-2.67 6-6 6-3.3 0-6-2.67-6-6 0-3.3 2.7-6 6-6Z" />
  </svg>
);

export default SvgMapMarker;
