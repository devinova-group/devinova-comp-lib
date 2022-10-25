import * as React from "react";
import {SVGProps} from "react";

export const Eye = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M12.09 3C4.5 3 0 12 0 12s4.5 9 12.09 9C19.5 21 24 12 24 12s-4.5-9-11.91-9ZM12 6c3.33 0 6 2.7 6 6 0 3.33-2.67 6-6 6-3.3 0-6-2.67-6-6 0-3.3 2.7-6 6-6Zm0 3c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3c0-.3-.12-.57-.18-.84-.24.48-.72.84-1.32.84-.84 0-1.5-.66-1.5-1.5 0-.6.36-1.08.84-1.32C12.57 9.09 12.3 9 12 9Z" />
  </svg>
);
