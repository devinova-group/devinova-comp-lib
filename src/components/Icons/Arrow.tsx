import * as React from "react";
import {SVGProps} from "react";

export const ArrowBottom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M12 0C11.4477 0 11 0.447715 11 1V14C11 14.5523 10.5523 15 10 15H7.15147C6.30088 15 5.83866 15.9945 6.38702 16.6447L11.8163 23.0826C12.219 23.56 12.9558 23.5557 13.3528 23.0735L18.6533 16.6356C19.1905 15.9832 18.7264 15 17.8813 15H15C14.4477 15 14 14.5523 14 14V1C14 0.447715 13.5523 0 13 0H12Z" />
  </svg>
);
export const ArrowCircleBottom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15508)">
      <path d="M12 0C5.37 0 0 5.37 0 12C0 18.63 5.37 24 12 24C18.63 24 24 18.63 24 12C24 5.37 18.63 0 12 0ZM9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V11C15 11.5523 15.4477 12 16 12H18.5858C19.4767 12 19.9229 13.0771 19.2929 13.7071L12.7071 20.2929C12.3166 20.6834 11.6834 20.6834 11.2929 20.2929L4.7071 13.7071C4.07714 13.0771 4.52331 12 5.41421 12H8C8.55228 12 9 11.5523 9 11V4Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15508">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export const ArrowCircleLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15505)">
      <path d="M12 0C5.37 0 0 5.37 0 12C0 18.63 5.37 24 12 24C18.63 24 24 18.63 24 12C24 5.37 18.63 0 12 0ZM10.2929 4.7071C10.9229 4.07714 12 4.52331 12 5.41421V8C12 8.55228 12.4477 9 13 9H20C20.5523 9 21 9.44772 21 10V14C21 14.5523 20.5523 15 20 15H13C12.4477 15 12 15.4477 12 16V18.5858C12 19.4767 10.9229 19.9229 10.2929 19.2929L3.70711 12.7071C3.31658 12.3166 3.31658 11.6834 3.70711 11.2929L10.2929 4.7071Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15505">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export const ArrowCircleRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15503)">
      <path d="M12 0C5.37 0 0 5.37 0 12C0 18.63 5.37 24 12 24C18.63 24 24 18.63 24 12C24 5.37 18.63 0 12 0ZM12 5.41421C12 4.52331 13.0771 4.07714 13.7071 4.70711L20.2929 11.2929C20.6834 11.6834 20.6834 12.3166 20.2929 12.7071L13.7071 19.2929C13.0771 19.9229 12 19.4767 12 18.5858V16C12 15.4477 11.5523 15 11 15H4C3.44772 15 3 14.5523 3 14V10C3 9.44772 3.44772 9 4 9H11C11.5523 9 12 8.55228 12 8V5.41421Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15503">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export const ArrowCircleTop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <g clip-path="url(#clip0_511_15500)">
      <path d="M12 0C5.37 0 0 5.37 0 12C0 18.63 5.37 24 12 24C18.63 24 24 18.63 24 12C24 5.37 18.63 0 12 0ZM11.2929 3.70711C11.6834 3.31658 12.3166 3.31658 12.7071 3.70711L19.2929 10.2929C19.9229 10.9229 19.4767 12 18.5858 12H16C15.4477 12 15 12.4477 15 13V20C15 20.5523 14.5523 21 14 21H10C9.44772 21 9 20.5523 9 20V13C9 12.4477 8.55228 12 8 12H5.41421C4.52331 12 4.07714 10.9229 4.70711 10.2929L11.2929 3.70711Z" />
    </g>
    <defs>
      <clipPath id="clip0_511_15500">
        <rect width="24" height="24" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M9 5.15147C9 4.30088 8.00555 3.83866 7.35532 4.38702L0.917392 9.81633C0.439976 10.219 0.444325 10.9558 0.92646 11.3528L7.36438 16.6533C8.01678 17.1905 9 16.7264 9 15.8813V13C9 12.4477 9.44772 12 10 12H23C23.5523 12 24 11.5523 24 11V10C24 9.44772 23.5523 9 23 9H10C9.44772 9 9 8.55228 9 8V5.15147Z" />
  </svg>
);
export const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M16.6356 4.34666C15.9832 3.80952 15 4.2736 15 5.11866V8C15 8.55228 14.5523 9 14 9H1C0.447715 9 0 9.44772 0 10V11C0 11.5523 0.447715 12 1 12H14C14.5523 12 15 12.4477 15 13V15.8485C15 16.6991 15.9945 17.1613 16.6447 16.613L23.0826 11.1837C23.56 10.781 23.5557 10.0442 23.0735 9.64721L16.6356 4.34666Z" />
  </svg>
);
export const ArrowThickBottom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M10 0C9.44772 0 9 0.447715 9 1V14C9 14.5523 8.55228 15 8 15H5.4313C4.538 15 4.09292 16.0821 4.72772 16.7106L11.3793 23.2964C11.7718 23.685 12.405 23.6818 12.7936 23.2893L19.3135 16.7035C19.9386 16.0721 19.4913 15 18.6028 15H16C15.4477 15 15 14.5523 15 14V1C15 0.447715 14.5523 0 14 0H10Z" />
  </svg>
);
export const ArrowThickLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M9 5.4313C9 4.538 7.9179 4.09292 7.28938 4.72772L0.703615 11.3793C0.315025 11.7718 0.318191 12.405 0.710687 12.7936L7.29645 19.3135C7.92786 19.9386 9 19.4913 9 18.6028V16C9 15.4477 9.44772 15 10 15H23C23.5523 15 24 14.5523 24 14V10C24 9.44772 23.5523 9 23 9H10C9.44772 9 9 8.55228 9 8V5.4313Z" />
  </svg>
);
export const ArrowThickRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M16.7035 4.68651C16.0721 4.06142 15 4.50868 15 5.39716V8C15 8.55228 14.5523 9 14 9H1C0.447715 9 0 9.44772 0 10V14C0 14.5523 0.447715 15 1 15H14C14.5523 15 15 15.4477 15 16V18.5687C15 19.462 16.0821 19.9071 16.7106 19.2723L23.2964 12.6207C23.685 12.2282 23.6818 11.595 23.2893 11.2064L16.7035 4.68651Z" />
  </svg>
);
export const ArrowThickTop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M12.6207 0.703615C12.2282 0.315025 11.595 0.318191 11.2064 0.710687L4.68651 7.29645C4.06142 7.92786 4.50868 9 5.39716 9H8C8.55228 9 9 9.44772 9 10V23C9 23.5523 9.44772 24 10 24H14C14.5523 24 15 23.5523 15 23V10C15 9.44772 15.4477 9 16 9H18.5687C19.462 9 19.9071 7.9179 19.2723 7.28938L12.6207 0.703615Z" />
  </svg>
);
export const ArrowTop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill ? props.fill : "black"}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height={props.height ? props.height : 24}
  >
    <path d="M13.1837 0.917392C12.781 0.439976 12.0442 0.444325 11.6472 0.92646L6.34666 7.36438C5.80952 8.01678 6.2736 9 7.11866 9H10C10.5523 9 11 9.44772 11 10V23C11 23.5523 11.4477 24 12 24H13C13.5523 24 14 23.5523 14 23V10C14 9.44772 14.4477 9 15 9H17.8485C18.6991 9 19.1613 8.00555 18.613 7.35532L13.1837 0.917392Z" />
  </svg>
);
