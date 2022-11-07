import {css} from "@emotion/css";
import React, {useEffect, useState} from "react";
import {Button, X} from "..";
import {InnerDialog} from "./InnerDialog.styles";
import {DialogProps} from "./Dialog.props";
import {DialogWrapper} from "./DialogWrapper.styles";

export const Dialog = ({
  children,
  dark,
  style,
  open,
  closeDialog,
}: DialogProps) => {
  return (
    <>
      <DialogWrapper open={open} onClick={closeDialog}>
        <InnerDialog
          style={style}
          dark={dark}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <span
            onClick={closeDialog}
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
