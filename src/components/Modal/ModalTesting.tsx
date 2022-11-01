import React, {useState} from "react";
import {Button} from "..";
import {Modal} from "./Modal";

export const ModalTest = () => {
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
      <Modal>
        <Button
          variant="primary"
          onClick={() => {
            setOpen(false);
          }}
        >
          Close
        </Button>
      </Modal>
    </>
  );
};
