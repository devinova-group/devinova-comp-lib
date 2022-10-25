import styled, {CSSObject} from "@emotion/styled";
import {colorPalette} from "../../theme";
import {toastProps} from "./Toast.props";

type enumStyles = Record<string, CSSObject>;

const baseStyling: CSSObject = {
  boxSizing: "border-box",
  position: "relative",
  height: 50,
  width: 400,
  borderRadius: 2,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  "&:hover": {transform: "scale(.95)"},
};

const variants: enumStyles = {
  success: {
    backgroundColor: colorPalette.ToastColor.SuccessV1,
    borderLeftColor: colorPalette.ToastBorderColor.Success,
    borderLeftStyle: "solid",
    borderLeftWidth: 4,
  },
  warning: {
    backgroundColor: colorPalette.ToastColor.WarningV1,
    borderLeftColor: colorPalette.ToastBorderColor.Warning,
    borderLeftStyle: "solid",
    borderLeftWidth: 4,
  },
  error: {
    backgroundColor: colorPalette.ToastColor.ErrorV1,
    borderLeftColor: colorPalette.ToastBorderColor.Error,
    borderLeftStyle: "solid",
    borderLeftWidth: 4,
  },
  notice: {
    backgroundColor: colorPalette.ToastColor.NoticeV1,
    borderLeftColor: colorPalette.ToastBorderColor.Notice,
    borderLeftStyle: "solid",
    borderLeftWidth: 4,
  },
  info: {
    backgroundColor: colorPalette.ToastColor.InfoV1,
    borderLeftColor: colorPalette.ToastBorderColor.Info,
    borderLeftStyle: "solid",
    borderLeftWidth: 4,
  },
  successv2: {
    backgroundColor: colorPalette.ToastColor.SuccessV2,
  },
  warningv2: {
    backgroundColor: colorPalette.ToastColor.WarningV2,
  },
  errorv2: {
    backgroundColor: colorPalette.ToastColor.ErrorV2,
  },
  noticev2: {
    backgroundColor: colorPalette.ToastColor.NoticeV2,
  },
  infov2: {
    backgroundColor: colorPalette.ToastColor.InfoV2,
  },
};

const toastVariant = ({variant = "success"}: toastProps) => variants[variant];

export const StyledToast = styled.div<toastProps>(toastVariant, baseStyling);
