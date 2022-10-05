import React from "react";

export interface toastProps {
  id?: string;
  content?: React.ReactNode;
  variant?: string;
  autoCloseTime?: number;
  autoClose?: boolean;
  onClose?: React.MouseEventHandler;
}

export interface toastDurationProps {
  autoCloseTime: number | undefined;
}
