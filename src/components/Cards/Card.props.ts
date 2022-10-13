import React, { ElementType } from "react";

export interface cardProps {
  style?: React.CSSProperties;
  children?: React.ReactNode | never;
  raised?: boolean;
}

export interface cardContentProps {
  children?: React.ReactNode | never;
  style?: React.CSSProperties;
  component?: ElementType;
}

export interface cardHeaderProps {
  style?: React.CSSProperties;
  action?: React.ReactNode;
  avatar?: React.ReactNode;
  subheader?: React.ReactNode;
  title?: React.ReactNode;
  subheaderTypographyProps?: object;
  titleTypographyProps?: object;
  component?: ElementType;
}

export interface cardMediaProps {
  style?: React.CSSProperties;
  height: number;
  src: string;
  component: ElementType;
}

export interface collapseProps {
  style?: React.CSSProperties;
  children?: React.ReactNode | never;
  component?: ElementType;
  in?: boolean;
  orientation?: "horizontal" | "vertical";
}
