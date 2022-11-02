import * as React from "react";
import { SVGProps } from "react";

const SvgTags = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M1 5a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l8 8a1 1 0 0 0 1.414 0L13.5 15.5l.793-.793a1 1 0 0 0 0-1.414L9 8 6.293 5.293A1 1 0 0 0 5.586 5H1Zm11.644 0c-.89 0-1.337 1.077-.707 1.707l6.595 6.595a1 1 0 0 1 .008 1.405l-2.19 2.246a1 1 0 0 0 .008 1.405l.935.935a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-8-8A1 1 0 0 0 14.586 5h-1.942ZM4.5 8C5.34 8 6 8.66 6 9.5S5.34 11 4.5 11 3 10.34 3 9.5 3.66 8 4.5 8Z" />
  </svg>
);

export default SvgTags;
