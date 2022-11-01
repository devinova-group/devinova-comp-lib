import { css } from "@emotion/css";
import React, { useEffect, useState } from "react";
import { Button, X } from "..";
import { InnerDialog } from "./InnerDialog.styles";
import { DialogProps } from "./Dialog.props";
import { DialogWrapper } from "./DialogWrapper.styles";

export const Dialog = ({
  children,
  closeModal,
  buttonSize,
  buttonStyle,
  buttonVariant,
  dark,
  style,
}: DialogProps) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [closeModal]);
  return (
    <>
      <Button
        variant={!buttonVariant ? "primary" : buttonVariant}
        size={!buttonSize ? "small" : buttonSize}
        style={buttonStyle}
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Dialog
      </Button>
      <DialogWrapper
        open={open}
        onClick={() => {
          setOpen(false);
        }}
      >
        <InnerDialog
          style={style}
          dark={dark}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <span
            onClick={() => {
              setOpen(false);
            }}
            className={css`
              position: absolute;
              top: 1rem;
              right: 1rem;
              cursor: pointer;
            `}
          >
            <X fill="grey" height="16px" />
          </span>
          {children}
        </InnerDialog>
      </DialogWrapper>
    </>
  );
};
