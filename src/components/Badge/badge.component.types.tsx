import React from 'react';


export interface BadgeProps {
	variant: "InActive" | "Error" | "Disabled" | "Active" | "Primary" | "Default" | "Selected" | "Secondary";
	verticalAlignment?: 'top' | 'bottom';
	horizontalAlignment?: 'left' | 'right';
	hideZero?: boolean;
	style?: React.CSSProperties
	children?: React.ReactNode
}