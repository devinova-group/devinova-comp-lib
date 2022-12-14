import React, {useState} from "react";
import {Button} from "..";
import {Dialog} from "./Dialog";

export const DialogTest = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="contained"
        size="small"
        style={{
          position: "absolute",
          bottom: "1rem",
          right: "1rem",
        }}
        children={"Close"}
      />
      <Dialog onClose={() => setOpen(false)} open={open}>
        Test
      </Dialog>
    </>
  );
};
