import React, { useEffect, useState } from "react";
import { toastProps } from "../components/Toast";

export interface TAC {
  toasts: toastProps[];
  setToasts: (value: React.SetStateAction<toastProps[]>) => void;
  autoClose: boolean;
  autoCloseTime: number;
}

export const useToastAutoClose = ({
  toasts,
  setToasts,
  autoClose,
  autoCloseTime,
}: TAC) => {
  const [removing, setRemoving] = useState("");

  useEffect(() => {
    if (removing) {
      setToasts((t) => t.filter((_t) => _t.id !== removing));
    }
  }, [removing, setToasts]);

  useEffect(() => {
    if (autoClose && toasts.length) {
      const id = toasts[toasts.length - 1].id;
      if (id) {
        setTimeout(() => setRemoving(id), autoCloseTime);
      }
    }
  }, [toasts, autoClose, autoCloseTime]);
};
