import * as React from "react";
import { SVGProps } from "react";

const SvgDial = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M12 3C5.737 3 .554 7.863.042 14c-.046.55.406 1 .958 1h1c.552 0 .994-.45 1.054-.998A8.987 8.987 0 0 1 12 6a8.987 8.987 0 0 1 8.946 8.002c.06.549.502.998 1.054.998h1c.552 0 1.004-.45.958-1C23.446 7.863 18.264 3 12 3Zm-1.356 6.888c-.245-.367-.707-.537-1.11-.354C7.465 10.47 6 12.564 6 15c0 3.33 2.7 6 6 6 3.33 0 6-2.67 6-6 0-2.436-1.441-4.506-3.53-5.46-.405-.185-.87-.016-1.118.353l-.521.778a1 1 0 0 1-1.662 0l-.525-.783Z" />
  </svg>
);

export default SvgDial;
