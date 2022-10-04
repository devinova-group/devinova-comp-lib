import React, { useRef, useState } from "react";
import ToastPortal from "./ToastPortal";

export interface testingProps {
  content?: string;
  variant?: string;
  position?: string;
  autoClose?: boolean;
}

export const Testing = (props: testingProps) => {
  type CountdownHandle = React.ElementRef<typeof ToastPortal>;
  const toastRef = useRef<CountdownHandle>(null);
  const content = props.content;
  const variant = props.variant;
  const position = props.position;
  const autoClose = props.autoClose;

  const addToast = () => {
    toastRef.current?.createToast({ variant, content });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addToast();
        }}
      >
        <button type="submit">Test</button>
      </form>
      <ToastPortal position={position} ref={toastRef} autoClose={autoClose} />
    </>
  );
};
