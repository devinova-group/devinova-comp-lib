import {CSSProperties, ReactNode} from "react";

export interface DialogProps {
  children: ReactNode | never;
  dark?: boolean;
  buttonVariant?: "primary" | "error" | "positive";
  buttonSize?: "small" | "medium" | "large";
  buttonStyle?: CSSProperties;
  style?: CSSProperties;
  closeModal?: boolean
}

export interface DialogStyleProps {
  style?: CSSProperties;
  dark?:boolean;
  open?: boolean;
}
