import * as React from "react";
import { SVGProps } from "react";

const SvgSuccessLoading = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g filter="url(#successLoading_svg__a)">
      <path
        d="M64 32c0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0c17.673 0 32 14.327 32 32ZM9.88 32c0 12.216 9.904 22.12 22.12 22.12 12.216 0 22.12-9.904 22.12-22.12 0-12.216-9.904-22.12-22.12-22.12C19.784 9.88 9.88 19.784 9.88 32Z"
        fill="#FFF4FF"
      />
      <path
        d="M64 32c0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0c17.673 0 32 14.327 32 32ZM9.88 32c0 12.216 9.904 22.12 22.12 22.12 12.216 0 22.12-9.904 22.12-22.12 0-12.216-9.904-22.12-22.12-22.12C19.784 9.88 9.88 19.784 9.88 32Z"
        fill="#26962B"
      />
      <g filter="url(#successLoading_svg__b)">
        <path
          d="M39.952 23.707a1 1 0 0 0-1.421.023l-1.371 1.43-7.646 7.646a1 1 0 0 1-1.4.013L26.39 31.16l-1.453-1.453a1 1 0 0 0-1.414 0l-2.816 2.816a1 1 0 0 0 0 1.414l1.453 1.453 4.5 4.5 1.363 1.422a1 1 0 0 0 1.43.016l1.437-1.438 10.5-10.5 1.445-1.445a1 1 0 0 0-.007-1.422l-2.876-2.816Z"
          fill="#26962B"
        />
      </g>
    </g>
    <defs>
      <filter
        id="successLoading_svg__a"
        x={-4}
        y={-4}
        width={72}
        height={72}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={2} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1945_5961"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1945_5961"
          result="shape"
        />
      </filter>
      <filter
        id="successLoading_svg__b"
        x={16}
        y={20}
        width={32}
        height={32}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1945_5961"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1945_5961"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgSuccessLoading;
