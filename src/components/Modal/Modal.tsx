import {css} from "@emotion/css";
import React, {useState} from "react";
import {Button, X} from "..";
import {InnerModal} from "./InnerModal.styles";
import {ModalProps} from "./modal.props";
import {ModalWrapper} from "./ModalWrapper.styles";

export const Modal = ({children}: ModalProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Modal
      </Button>
      <ModalWrapper
        open={open}
        onClick={() => {
          setOpen(false);
        }}
      >
        <InnerModal
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
        </InnerModal>
      </ModalWrapper>
    </>
  );
};
