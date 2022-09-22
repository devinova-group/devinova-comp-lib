interface TypographyProps {
  variant?: keyof typeof variantMapping;
  as?: any;
  bold?: boolean;
  align?: string | any;
  children?: React.ReactNode | never;
  size?: any;
  primary?: string;
  secondary?: string;
  success?: string;
  error?: string;
  warning?: string;
  theme?: any;
  Typography?: any;
}

interface StyledTextProps extends TypographyProps {
  textAlign?: React.CSSProperties["alignItems"];
  justify?: React.CSSProperties["justifyContent"];
  fontWeight?: boolean;
  color?: string;
  fontsize?: string;
  variant?: string | any;
  theme?: any;
}

export const variantMapping = {
  h1Neucha: "h1",
  h1QS: "h1",
  h1POI: "h1",
  h2Neucha: "h2",
  h2QS: "h2",
  h2POI: "h2",
  h3Neucha: "h3",
  h3QS: "h3",
  h3POI: "h3",
  h4Neucha: "h4",
  h4QS: "h4",
  h4POI: "h4",
  h5Neucha: "h5",
  h5QS: "h5",
  h5POI: "h5",
  h6Neucha: "h6",
  h6QS: "h6",
  h6POI: "h6",
  NSDisplay: "p",
  NSTitle1: "p",
  NSTitle2: "p",
  NSSubhead: "p",
  NSBody1: "p",
  NSBody2: "p",
  NSBody3: "p",
  NSCaption: "p",
  NSButton: "p",
  NSOverline: "p",
  QSDisplay: "p",
  QSTitle1: "p",
  QSTitle2: "p",
  QSSubhead: "p",
  QSBody1: "p",
  QSBody2: "p",
  QSCaption: "p",
  QSButton: "p",
  QSOverline: "p",
};

export type { TypographyProps, StyledTextProps };
