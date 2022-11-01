import React, { useState } from "react";
import { Button } from "..";
import { Dialog } from "./Dialog";

export const DialogTest = () => {
  const [open, setOpen] = useState(true);
  return (
    <Dialog closeModal={open}>
      <Button
        onClick={() => {
          !open ? setOpen(true) : setOpen(false);
        }}
        variant="error"
        size="small"
        style={{
          position: "absolute",
          bottom: "1rem",
          right: "1rem",
        }}
        children={"Close"}
      />
    </Dialog>
  );
};
