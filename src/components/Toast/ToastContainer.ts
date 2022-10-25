import styled, {CSSObject} from "@emotion/styled";
import {units} from "../../units";
import {portal} from "./ToastPortal";

const spacing = units.spacing;

const baseStyling: CSSObject = {
  width: "400px",
  height: "fitcontent",
  position: "fixed",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  gap: spacing.d4,
  justifyContent: "center",
  alignItems: "center",
};

type enumStyles = Record<string, CSSObject>;

const positionVariants: enumStyles = {
  "top-left": {top: spacing.d4, left: spacing.d4},
  "top-center": {
    top: spacing.d4,
    left: "50%",
    transform: "translateX(-50%)",
  },
  "top-right": {top: spacing.d4, right: spacing.d4},
  "bottom-left": {bottom: spacing.d4, left: spacing.d4},
  "bottom-center": {
    bottom: spacing.d4,
    left: "50%",
    transform: "translateX(-50%)",
  },
  "bottom-right": {bottom: spacing.d4, right: spacing.d4},
};

const positionToastContainer = ({position = "top-right"}: portal) =>
  positionVariants[position];

export const StyledToastContainer = styled.div<portal>(
  baseStyling,
  positionToastContainer
);
