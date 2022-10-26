import React from "react";
import {Typography} from "../Typography";
import {ToastDuration} from "./Toast.Styles.Timer";
import {toastProps} from "./Toast.props";
import {StyledToast} from "./Toast.styles";

export const Toast: React.FC<toastProps> = ({
  content,
  variant,
  onClose,
  autoCloseTime,
  autoClose,
}) => {
  if (!variant) {
    variant = "default";
  }
  return autoClose ? (
    <StyledToast variant={variant} onClick={onClose}>
      <Typography variant="NSCaption">{content}</Typography>
      <ToastDuration autoCloseTime={autoCloseTime} />
    </StyledToast>
  ) : (
    <StyledToast variant={variant} onClick={onClose}>
      <Typography variant="NSCaption">{content}</Typography>
    </StyledToast>
  );
};
