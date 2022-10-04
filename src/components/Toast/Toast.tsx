import React from "react";
import Typography from "../Typography";
import { toastProps } from "./Toast.props";
import { StyledToast } from "./Toast.styles";

export const Toast: React.FC<toastProps> = ({ content, variant, onClose }) => {
  return (
    <StyledToast variant={variant} onClick={onClose}>
      <Typography variant="NSCaption">{content}</Typography>
    </StyledToast>
  );
};
