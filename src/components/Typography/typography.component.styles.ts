import styled, { CSSObject } from "@emotion/styled";
import { StyledTextProps, TypographyProps } from "./typography.component.props";
import { colorPalette, typography } from "../../theme";

type enumStyles = Record<string, CSSObject>;

const textVariants: enumStyles = {
  // Typography Headers Version 1: Neucha
  h1Neucha: {
    fontFamily: typography.Neucha,
    fontWeight: "400",
    fontSize: "104px",
    lineHeight: "130%",
    letterSpacing: "3.5px",
  },
  h2Neucha: {
    fontFamily: typography.Neucha,
    fontWeight: "400",
    fontSize: "64px",
    lineHeight: "130%",
    letterSpacing: "2px",
  },
  h3Neucha: {
    fontFamily: typography.Neucha,
    fontWeight: "400",
    fontSize: "56px",
    lineHeight: "130%",
    letterSpacing: "2px",
  },
  h4Neucha: {
    fontFamily: typography.Neucha,
    fontWeight: "400",
    fontSize: "48px",
    lineHeight: "125%",
    letterSpacing: "1px",
  },
  h5Neucha: {
    fontFamily: typography.Neucha,
    fontWeight: "400",
    fontSize: "28px",
    lineHeight: "160%",
    letterSpacing: "2px",
  },
  h6Neucha: {
    fontFamily: typography.Neucha,
    fontWeight: "400",
    fontSize: "21px",
    lineHeight: "160%",
    letterSpacing: "2px",
  },
  // Typography Headers Version 2: Quicksand
  h1QS: {
    fontFamily: typography.Quicksand,
    fontWeight: "400",
    fontSize: "104px",
    lineHeight: "130%",
    letterSpacing: "2.5px",
  },
  h2QS: {
    fontFamily: typography.Quicksand,
    fontWeight: "400",
    fontSize: "64px",
    lineHeight: "130%",
    letterSpacing: "2px",
  },
  h3QS: {
    fontFamily: typography.Quicksand,
    fontWeight: "400",
    fontSize: "56px",
    lineHeight: "125%",
    letterSpacing: "1px",
  },
  h4QS: {
    fontFamily: typography.Quicksand,
    fontWeight: "400",
    fontSize: "38px",
    lineHeight: "120%",
    letterSpacing: "1px",
  },
  h5QS: {
    fontFamily: typography.Quicksand,
    fontWeight: "500",
    fontSize: "28px",
    lineHeight: "165%",
    letterSpacing: "3px",
  },
  h6QS: {
    fontFamily: typography.Quicksand,
    fontWeight: "500",
    fontSize: "21px",
    lineHeight: "160%",
    letterSpacing: "1px",
  },
  // Typography Headers Version 3: Poiret One
  h1POI: {
    fontFamily: typography.PoiretOne,
    fontWeight: "400",
    fontSize: "104px",
    lineHeight: "140%",
    letterSpacing: "2.5px",
  },
  h2POI: {
    fontFamily: typography.PoiretOne,
    fontWeight: "400",
    fontSize: "64px",
    lineHeight: "130%",
    letterSpacing: "2px",
  },
  h3POI: {
    fontFamily: typography.PoiretOne,
    fontWeight: "400",
    fontSize: "56px",
    lineHeight: "125%",
    letterSpacing: "2px",
  },
  h4POI: {
    fontFamily: typography.PoiretOne,
    fontWeight: "400",
    fontSize: "48px",
    lineHeight: "120%",
    letterSpacing: "2px",
  },
  h5POI: {
    fontFamily: typography.PoiretOne,
    fontWeight: "400",
    fontSize: "28px",
    lineHeight: "165%",
    letterSpacing: "2px",
  },
  h6POI: {
    fontFamily: typography.PoiretOne,
    fontWeight: "400",
    fontSize: "26px",
    lineHeight: "160%",
    letterSpacing: "1px",
  },
  // Typography Body Text Type 1: Noto Sans
  NSDisplay: {
    fontFamily: typography.NotoSans,
    fontWeight: "300",
    fontSize: "21px",
    lineHeight: "170%",
    letterSpacing: "1px",
  },
  NSTitle1: {
    fontFamily: typography.NotoSans,
    fontWeight: "500",
    fontSize: "21px",
    lineHeight: "170%",
    letterSpacing: "2px",
  },
  NSTitle2: {
    fontFamily: typography.NotoSans,
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "170%",
    letterSpacing: "2px",
  },
  NSSubhead: {
    fontFamily: typography.NotoSans,
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "170%",
    letterSpacing: "1px",
  },
  NSBody1: {
    fontFamily: typography.NotoSans,
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "170%",
    letterSpacing: "0px",
  },
  NSBody2: {
    fontFamily: typography.NotoSans,
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "180%",
    letterSpacing: "1px",
  },
  NSBody3: {
    fontFamily: typography.NotoSans,
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "180%",
    letterSpacing: "0px",
  },
  NSCaption: {
    fontFamily: typography.NotoSans,
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "165%",
    letterSpacing: "1px",
  },
  NSButton: {
    fontFamily: typography.NotoSans,
    fontWeight: "600",
    fontSize: "21px",
    lineHeight: "165%",
    letterSpacing: "1px",
  },
  NSOverline: {
    fontFamily: typography.NotoSans,
    fontWeight: "500",
    fontSize: "15px",
    lineHeight: "170%",
    letterSpacing: "3px",
  },
  // Typography Body Text Type 2: Quicksand
  QSDisplay: {
    fontFamily: typography.Quicksand,
    fontWeight: "400",
    fontSize: "21px",
    lineHeight: "170%",
    letterSpacing: "1px",
  },
  QSTitle1: {
    fontFamily: typography.Quicksand,
    fontWeight: "600",
    fontSize: "21px",
    lineHeight: "170%",
    letterSpacing: "2px",
  },
  QSTitle2: {
    fontFamily: typography.Quicksand,
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "170%",
    letterSpacing: "2px",
  },
  QSSubhead: {
    fontFamily: typography.Quicksand,
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "170%",
    letterSpacing: "1px",
  },
  QSBody1: {
    fontFamily: typography.Quicksand,
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "185%",
    letterSpacing: "0px",
  },
  QSBody2: {
    fontFamily: typography.Quicksand,
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "185%",
    letterSpacing: "0px",
  },
  QSCaption: {
    fontFamily: typography.Quicksand,
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "165%",
    letterSpacing: "1px",
  },
  QSButton: {
    fontFamily: typography.Quicksand,
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "165%",
    letterSpacing: "0px",
  },
  QSOverline: {
    fontFamily: typography.Quicksand,
    fontWeight: "600",
    fontSize: "15px",
    lineHeight: "170%",
    letterSpacing: "2px",
  },
};

const colorVariants: enumStyles = {
  blackRussian: {
    color: colorPalette.Text.blackRussian,
  },
  gray: {
    color: colorPalette.Text.gray,
  },
  black: {
    color: colorPalette.Text.Black,
  },
  white: {
    color: colorPalette.Text.White,
  },
};

const textColor = ({ color = "black" }: StyledTextProps) =>
  colorVariants[color];

const textStyle = ({ variant = "NSBody1" }: StyledTextProps) =>
  textVariants[variant];

export const Text = styled.h1<StyledTextProps>(textStyle, textColor);
