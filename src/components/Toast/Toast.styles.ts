import styled, { CSSObject } from "@emotion/styled";
import { colorPalette } from "../../theme";
import { toastProps } from "./Toast.props";

type enumStyles = Record<string, CSSObject>;

const baseStyling: CSSObject = {
  position: "relative",
  height: 50,
  width: 280,
  borderRadius: 8,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": { transform: "scale(.95)" },
  // "&:before": { content: '"\00D7"' },
};

const variants: enumStyles = {
  default: { backgroundColor: colorPalette.LightMode.Primary },
  success: { backgroundColor: colorPalette.lightBadgeColor.Active },
  error: { backgroundColor: colorPalette.lightBadgeColor.InActive },
  warning: { backgroundColor: colorPalette.lightBadgeColor.Error },
  info: { backgroundColor: colorPalette.lightBadgeColor.Primary },
};

const toastVariant = ({ variant = "default" }: toastProps) => variants[variant];

export const StyledToast = styled.div<toastProps>(toastVariant, baseStyling);
