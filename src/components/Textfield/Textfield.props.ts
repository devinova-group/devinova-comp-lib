import React from "react"

export interface TextfieldOption {
    text?: string;
    icon?: string;
    as?: any;
    placeholder: any;
    variant: 'primary' | 'error' | 'border' | 'textarea';
    inputSize: "small" | "medium" | "large" | '';
    type: "text" | "search";
    href?: string;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode
  }

  export const variantMapping = {
    textarea: "textarea",
    primary: "input",
    error: "input",
    border: "input",
  }