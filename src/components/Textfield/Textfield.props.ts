import React from "react"

export interface TextfieldOption {
    text?: string;
    icon?: string;
    variant: 'primary' | 'error' | 'positive' | '';
    size?: "small" | "medium" | "large" | '';
    href?: string;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode
  }