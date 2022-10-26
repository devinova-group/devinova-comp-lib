import styled, {CSSObject} from "@emotion/styled";
import {colorPalette} from "../../theme";
import {typography} from "../../theme";
import {BadgeProps} from "./badge.component.types";

const badgeBase: CSSObject = {
  display: "flex",
  height: "34px",
  padding: "4px 8px",
  position: "absolute",
  flexWrap: "wrap",
  fontFamily: typography.Quicksand,
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "185%",
  letterSpacing: "0px",
  boxSizing: "border-box",
  alignItems: "center",
  alignContent: "center",
  flexDirection: "row",
  justifyContent: "center",
  borderRadius: "4px",
};

type EnumStyles = Record<string, CSSObject>;

export const badgeVariant: EnumStyles = {
  InActive: {
    display: "flex",
    color: colorPalette.lightBadgeColor.InActive,
    backgroundColor: "rgba(255, 255, 255, 0)",
    border: "1px solid rgba(240, 55, 56, 0.1)",
  },
  Error: {
    display: "flex",
    color: colorPalette.lightBadgeColor.Error,
    backgroundColor: "rgba(255, 255, 255, 0)",
    border: "1px solid rgba(204, 148, 40, 0.1)",
  },
  Disabled: {
    display: "flex",
    color: colorPalette.lightBadgeColor.Disabled,
    backgroundColor: "rgba(255, 255, 255, 0)",
    border: "1px solid rgba(180, 180, 180, 0.15)",
  },
  Active: {
    display: "flex",
    color: colorPalette.lightBadgeColor.Active,
    backgroundColor: "rgba(255, 255, 255, 0)",
    border: "1px solid rgba(60, 193, 59, 0.1)",
  },
  Primary: {
    display: "flex",
    color: colorPalette.lightBadgeColor.Primary,
    backgroundColor: "rgba(255, 255, 255, 0)",
    border: "1px solid rgba(75, 136, 207, 0.1)",
  },
  Default: {
    display: "flex",
    color: colorPalette.Text.White,
    backgroundColor: colorPalette.LightMode.Secondary,
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },
  Selected: {
    display: "flex",
    color: colorPalette.Status.Positive,
    backgroundColor: colorPalette.Text.White,
    border: "1px solid rgba(60, 193, 59, 0.2)",
  },
  Secondary: {
    display: "flex",
    color: colorPalette.Oath[400],
    backgroundColor: colorPalette.LightMode.Secondary,
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },
};

export const BadgeComponent = styled.div<BadgeProps>`
  ${badgeBase},
  ${(props) => props.variant && badgeVariant[props.variant]}
`;
