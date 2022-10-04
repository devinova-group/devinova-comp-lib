import React from "react";

export interface toastProps {
  id?: string;
  content?: React.ReactNode;
  variant?: string;
  autoClose?: boolean;
  onClose?: React.MouseEventHandler;
}
