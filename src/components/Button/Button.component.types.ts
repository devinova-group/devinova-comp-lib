import React from "react"

export interface ButtonOption  {
    text?: string;
    icon?: string;
    onClick?: () => void;
    color: 'primary' | 'error' | 'positive';
    size?: "small" | "medium" | "large";
    variant: "contained" | "text" | "outlined";
    href?: string;
    disabled?: boolean;
    isFullWidth?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    iconName?: string;
    isHover?:boolean;
}
