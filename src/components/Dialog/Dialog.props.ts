import {CSSProperties, ReactNode} from "react";

export interface DialogProps {
  children: ReactNode | never;
  dark?: boolean;
  style?: CSSProperties;
  open: boolean;
  closeDialog: () => void;
}

export interface DialogStyleProps {
  style?: CSSProperties;
  dark?: boolean;
  open?: boolean;
}
