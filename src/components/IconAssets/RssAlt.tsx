import * as React from "react";
import { SVGProps } from "react";

const SvgRssAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#rss-alt_svg__a)">
      <path d="M2 .083C.898-.01 0 .895 0 2v2c0 1.105.899 1.988 1.997 2.108a17.922 17.922 0 0 1 15.895 15.895C18.012 23.101 18.895 24 20 24h2c1.105 0 2.009-.898 1.917-2C22.952 10.362 13.64 1.049 2 .084Zm-.005 9.05C.9 8.986 0 9.895 0 11v2c0 1.105.906 1.977 1.985 2.215a8.928 8.928 0 0 1 6.8 6.8C9.023 23.093 9.895 24 11 24h2c1.105 0 2.014-.9 1.867-1.995-.896-6.663-6.21-11.976-12.872-12.872Zm-.031 9.196C.92 17.968 0 18.895 0 20v2a2 2 0 0 0 2 2h2c1.105 0 2.033-.92 1.672-1.964a6.013 6.013 0 0 0-3.708-3.707Z" />
    </g>
    <defs>
      <clipPath id="rss-alt_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgRssAlt;
