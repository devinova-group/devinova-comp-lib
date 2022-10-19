import { ElementType, ReactNode, CSSProperties } from "react";
import { variantMapping } from "../Typography/typography.component.props";

export interface CardProps {
  style?: CSSProperties;
  children?: ReactNode | never;
  raised?: boolean;
  dark?: boolean;
}

export interface CardContentProps {
  children?: ReactNode | never;
  style?: CSSProperties;
}

export interface CardHeaderProps {
  style?: CSSProperties;
  subheader?: string;
  title: string;
  subheaderTypographyProps?: keyof typeof variantMapping;
  titleTypographyProps?: keyof typeof variantMapping;
}

export interface CardMediaProps {
  style?: CSSProperties;
  height: number;
  src: string;
  component: ElementType;
}

export interface CollapseProps {
  style?: CSSProperties;
  children?: ReactNode | never;
  in?: boolean;
  orientation?: "horizontal" | "vertical";
}
