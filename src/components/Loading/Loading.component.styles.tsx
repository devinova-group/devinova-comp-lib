import {css, keyframes} from "@emotion/css";
import React from "react";
import {loadingProps} from "./Loading.component.types";

export const circleSpeed = {
  slow: "2000ms",
  medium: "1000ms",
  fast: "500ms",
};

const animate = keyframes`
  0% {
    transform: rotate(360deg);
  }
  25% {
    transform: rotate(180deg);
  }
  50% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

function Loading({speed, style}: loadingProps) {
  return (
    <>
      <div
        className={css({
          position: "relative",
          width: "64px",
          height: "64px",
          background:
            "conic-gradient(from 90deg at 50% 50%, #4C3A80 0deg, #FFFFFF 360deg) ",
          borderRadius: "50%",
          animation: `${animate} linear infinite `,
          animationDelay: "1s",
          animationDuration: speed != undefined ? circleSpeed[speed] : "1s",

          [".smallCircle"]: {
            position: "absolute",
            top: "10px",
            bottom: "10px",
            left: "10px",
            right: "10px",
            borderRadius: "50%",
            backgroundColor: "white",
            opacity: "1",
          },

          [".ellipse"]: {
            position: "absolute",
            width: "10px",
            height: "10px",
            left: "54px",
            top: "27px",
            borderRadius: "50%",
            backgroundColor: "#4C3A88",
            opacity: "1",
          },
        })}
        style={style}
      >
        <span className="smallCircle"></span>
        <span className="ellipse"></span>
      </div>
    </>
  );
}

export default Loading;
