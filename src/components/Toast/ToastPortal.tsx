import React, { forwardRef, useImperativeHandle, useState } from "react";
import ReactDOM from "react-dom";
import { useToastAutoClose, useToastPortal } from "../../hooks";
import { toastProps } from "./Toast.props";
import { Toast } from "./Toast";
import { uuid } from "../../shared";
import { StyledToastContainer } from "./ToastContainer";

export interface portal {
  position?: string;
  autoClose?: boolean;
  autoCloseTime?: number;
  ref?: any;
}

interface RefAtts {
  createToast: (toast: toastProps) => void;
}

const ToastPortal = forwardRef<RefAtts, portal>(
  ({ autoClose = true, autoCloseTime = 10000, position }, ref) => {
    const [toasts, setToasts] = useState<toastProps[]>([]);
    const { loaded, portalId } = useToastPortal();

    useToastAutoClose({
      toasts,
      setToasts,
      autoClose,
      autoCloseTime,
    });

    const removeToast = (id?: string) => {
      setToasts(toasts.filter((t) => t.id !== id));
    };

    useImperativeHandle(ref, () => ({
      createToast(toast: toastProps) {
        setToasts([...toasts, { ...toast, id: uuid() }]);
      },
    }));

    return loaded ? (
      ReactDOM.createPortal(
        <StyledToastContainer position={position}>
          {toasts.map((t, i) => (
            <Toast
              key={i}
              content={t.content}
              variant={t.variant}
              autoCloseTime={t.autoCloseTime}
              autoClose={t.autoClose}
              onClose={() => removeToast(t.id)}
            />
          ))}
        </StyledToastContainer>,
        document.getElementById(portalId)!
      )
    ) : (
      <></>
    );
  }
);

export default ToastPortal;
