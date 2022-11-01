import {ReactNode} from "react";

export interface ModalProps {
  children: ReactNode | never;
}

export interface ModalStyleProps {
  children?: ReactNode | never;
  open?: boolean;
}
