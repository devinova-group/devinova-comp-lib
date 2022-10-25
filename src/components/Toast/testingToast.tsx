import React, { useRef } from "react";
import ToastPortal from "./ToastPortal";

export interface testingProps {
  content?: string;
  variant?: string;
  position?: string;
  autoClose?: boolean;
  autoCloseTime?: number;
}

export const Testing = (props: testingProps) => {
  type CountdownHandle = React.ElementRef<typeof ToastPortal>;
  const toastRef = useRef<CountdownHandle>(null);
  const content = props.content;
  const variant = props.variant;
  const position = props.position;
  const autoClose = props.autoClose;
  const autoCloseTime = props.autoCloseTime;

  const addToast = () => {
    toastRef.current?.createToast({
      variant,
      content,
    });
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
      <ToastPortal
        position={position}
        ref={toastRef}
        autoClose={autoClose}
        autoCloseTime={autoCloseTime}
      />
    </>
  );
};
