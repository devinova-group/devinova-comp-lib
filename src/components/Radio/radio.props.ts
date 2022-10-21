import { InputHTMLAttributes } from "react";

export interface InputElementProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string; 
  key?: string;
  disabled?: boolean;
  variant: 'filled' | 'disabled';
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const variantMapping = {
    disabled: "input",
    filled: "input",
    
  }