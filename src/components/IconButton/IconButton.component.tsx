import React from "react";
import {Button} from "../Button";
import Icon from "../SvgIcons/Icon.component";
import {css} from "@emotion/css";
import {buttonVariant} from "../Button/Button.component.styles";

interface props {
  size: "small" | "medium" | "large";
  iconName: string;
  isHover?: boolean;
  variant: "primary" | "error" | "positive" | "";
  isDisabled?: boolean;
  color?: string;
}

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

export function IconButton({
  size,
  iconName,
  isHover,
  variant,
  isDisabled,
  color,
}: props) {
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
            [`.icon`]: {
              display: "inline-flex",
              width: iconSize[size].width,
              height: iconSize[size].height,
            },
            [`:hover .icon`]: {
              display: "inline-flex",
              width: iconSize[size].width,
              height: iconSize[size].height,
              fill: buttonVariant[variant].backgroundColor,
            },
          })}
          variant={variant}
          isHover
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
            [`.icon`]: {
              display: "inline-flex",
              width: iconSize[size].width,
              height: iconSize[size].height,
            },
          })}
          variant={variant}
          disabled={isDisabled}
        >
          <Icon className="icon" name={iconName} color={color} />
        </Button>
      )}
    </>
  );
}
