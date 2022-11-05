import * as React from "react";
import {SVGProps} from "react";

export const Brush = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M22.32.075a.016.016 0 0 1-.015.015c-.072.006-.104.053-.152.082l-.025.016L10.89 8.16c-.12.09-.3.33-.39.48-.204.391-.004.87.398 1.054a6.856 6.856 0 0 1 3.408 3.407c.183.402.662.602 1.054.399.15-.09.36-.24.48-.39l7.98-11.25c.09-.15.12-.27 0-.39L22.5.15a.27.27 0 0 0-.165-.09.014.014 0 0 0-.015.015ZM7.995 11.985a.052.052 0 0 1-.036.015c-2.21.011-3.909 1.837-3.909 4.02 0 2.34-1.024 4.437-2.618 5.897-.57.522-.538 1.488.203 1.707a8.557 8.557 0 0 0 2.415.346c4.41 0 7.98-3.54 7.98-7.98 0-2.213-1.818-4.009-3.999-4.02a.051.051 0 0 0-.036.015Z" />
  </svg>
);