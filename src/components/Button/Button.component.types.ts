import React from "react"

export interface ButtonOption  {
    text?: string;
    icon?: string;
    onClick?: () => void;
    variant: 'primary' | 'error' | 'positive' | '';
    size?: "small" | "medium" | "large" | '';
    href?: string;
    disabled?: boolean;
    isFullWidth?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
    hasIcon?:boolean;
    iconName?: string;
    isHover?:boolean;
}
