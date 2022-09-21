import React from "react";
import styled from "@emotion/styled";
import { typography, colorPalette } from "../../theme";

export type TypographyProps = {
  variant?: string;
  font?: string;
  bold?: boolean;
  align?: string;
  children: string;
  size?: any;
  color?: string;
  label?: string;
  props: any;
};

const variantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  Display: "p",
  Title1: "p",
  Title2: "p",
  Subhead: "p",
  Body1: "p",
  Body2: "p",
  Body3: "p",
  Caption: "p",
  Button: "p",
  Overline: "p",
};

const h1Neucha = styled.h1({
  fontFamily: typography.Neucha,
  fontSize: "104px",
  letterSpacing: "3.5px",
  lineHeight: "130%",
  fontWeight: "normal",
});

const Typography = (props: TypographyProps) => {
  const Text = props.variant
    ? variantMapping[props.variant as keyof typeof variantMapping]
    : "p";

  return <Text />;
};

export default Typography;
