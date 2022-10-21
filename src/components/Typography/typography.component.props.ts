import React from "react";

interface TypographyProps {
  variant?: keyof typeof variantMapping;
  as?: any;
  children?: React.ReactNode | never;
  color?: string;
  textAlign?: string;
  style?: React.CSSProperties;
}

interface StyledTextProps extends TypographyProps {
  color?: string;
  variant?: string | any;
  textAlign?: string;
}

export const variantMapping = {
  h1Neucha: "h1",
  h2Neucha: "h2",
  h3Neucha: "h3",
  h4Neucha: "h4",
  h5Neucha: "h5",
  h6Neucha: "h6",
  h1QS: "h1",
  h2QS: "h2",
  h3QS: "h3",
  h4QS: "h4",
  h5QS: "h5",
  h6QS: "h6",
  h1POI: "h1",
  h2POI: "h2",
  h3POI: "h3",
  h4POI: "h4",
  h5POI: "h5",
  h6POI: "h6",
  NSDisplay: "h5",
  NSTitle1: "h6",
  NSTitle2: "h6",
  NSSubhead: "h6",
  NSBody1: "p",
  NSBody2: "span",
  NSBody3: "span",
  NSCaption: "span",
  NSButton: "span",
  NSOverline: "span",
  QSDisplay: "h5",
  QSTitle1: "h6",
  QSTitle2: "h6",
  QSSubhead: "h6",
  QSBody1: "p",
  QSBody2: "span",
  QSCaption: "span",
  QSButton: "span",
  QSOverline: "span",
};

export type { TypographyProps, StyledTextProps };
