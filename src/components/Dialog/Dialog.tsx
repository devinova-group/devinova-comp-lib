import React from "react";
import { InnerDialog } from "./InnerDialog.styles";
import { DialogProps } from "./Dialog.props";
import { DialogWrapper } from "./DialogWrapper.styles";

export const Dialog = ({
  children,
  dark,
  style,
  open,
  onClose,
}: DialogProps) => {
  return (
    <DialogWrapper open={open} onClick={onClose}>
      <InnerDialog
        style={style}
        dark={dark}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </InnerDialog>
    </DialogWrapper>
  );
};
