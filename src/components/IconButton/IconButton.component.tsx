import React from "react";
import { colorPalette } from "../../theme";
import Icon from "../SvgIcons/Icon.component";
import { css } from "@emotion/css";
import styled from "@emotion/styled";

interface props {
  size: "small" | "medium" | "large";
  iconName?: string;
  isHover?: boolean;
  variant: "primary" | "error" | "positive" | "";
  isDisabled?: boolean;
  color?: string;
}

const Button = styled.button<props>({
  primary: {
    color: colorPalette.Text.White,
    backgroundColor: colorPalette.DeviDaisy[500],
    boxShadow: "5px 10px 20px rgba(0,0,0,0.25)",
    "&:active": {
      backgroundColor: "#4C3A80",
    },
  },
  error: {
    color: colorPalette.Text.White,
    backgroundColor: colorPalette.Status.Error,
    boxShadow: "5px 10px 20px rgba(0,0,0,0.25)",
  },
  positive: {
    color: colorPalette.Text.White,
    backgroundColor: colorPalette.Status.Positive,
    boxShadow: "5px 10px 20px rgba(0,0,0,0.25)",
  },
});
const buttonSize = {
  small: {
    height: 42,
    width: 42,
    borderRadius: "4px",
  },
  medium: {
    height: 60,
    width: 60,
    borderRadius: "6px",
  },
  large: {
    height: 72,
    width: 72,
    borderRadius: "8px",
  },
};

const iconSize = {
  small: {
    height: 16,
    width: 16,
  },
  medium: {
    height: 24,
    width: 24,
  },
  large: {
    height: 30,
    width: 30,
  },
};

const IconButton = ({
  size,
  iconName,
  isHover,
  variant,
  isDisabled,
  color,
}: props) => {
  return (
    <>
      {!isHover && !isDisabled && (
        <Button
          className={css({
            width: buttonSize[size].width,
            height: buttonSize[size].height,
            borderRadius: buttonSize[size].borderRadius,
            [`.icon`]: {
              display: "inline-flex",
              width: iconSize[size].width,
              height: iconSize[size].height,
            },
          })}
          variant={variant}
          size={size}
        >
          <Icon className="icon" name={iconName} color={color} />
        </Button>
      )}
      {isHover == true && (
        <Button
          className={css({
            width: buttonSize[size].width,
            height: buttonSize[size].height,
            borderRadius: buttonSize[size].borderRadius,
            "&:hover": {
              boxSizing: "border-box",
              color: colorPalette.DeviDaisy[500],
              backgroundColor: "transparent",
              border: "2px solid #6044B5",
              boxShadow: "(5px 10px 20px rgba(0,0,0,0.25)",
            },
            [`.icon`]: {
              display: "inline-flex",
              width: iconSize[size].width,
              height: iconSize[size].height,
            },
            [`:hover .icon`]: {
              display: "inline-flex",
              width: iconSize[size].width,
              height: iconSize[size].height,
              fill: colorPalette.DeviDaisy[500],
            },
          })}
          variant={variant}
          size={size}
        >
          <Icon className="icon" name={iconName} color={color} />
        </Button>
      )}

      {isDisabled && (
        <Button
          className={css({
            width: buttonSize[size].width,
            height: buttonSize[size].height,
            borderRadius: buttonSize[size].borderRadius,
            cursor: "not-allowed",
            color: colorPalette.Text.White,
            backgroundColor: colorPalette.DeviDaisy[500],
            background: "rgba(96, 68, 181, 0.35)",
            boxShadow: "5px 10px 20px rgba(0, 0, 0, 0.25)",
            [`.icon`]: {
              display: "inline-flex",
              width: iconSize[size].width,
              height: iconSize[size].height,
            },
          })}
          variant={variant}
          size={size}
        >
          <Icon className="icon" name={iconName} color={color} />
        </Button>
      )}
    </>
  );
};

export default IconButton;
