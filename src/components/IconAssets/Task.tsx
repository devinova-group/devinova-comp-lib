import * as React from "react";
import { SVGProps } from "react";

const SvgTask = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M2 2a2 2 0 0 0-2 2v17a2 2 0 0 0 2 2h17a2 2 0 0 0 2-2v-5.149c0-1.336-1.616-2.005-2.56-1.06a1.5 1.5 0 0 0-.44 1.06V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h8.149a1.5 1.5 0 0 0 1.06-.44c.945-.944.276-2.56-1.06-2.56H2Zm20.414 1.414a2 2 0 0 0-2.828 0l-6.172 6.172a2 2 0 0 1-2.828 0l-.172-.172a2 2 0 0 0-2.828 0l-.172.172a2 2 0 0 0 0 2.828l3.172 3.172a2 2 0 0 0 2.828 0l9.172-9.172a2 2 0 0 0 0-2.828l-.172-.172Z" />
  </svg>
);

export default SvgTask;
