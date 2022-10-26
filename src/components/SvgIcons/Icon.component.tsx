import React, {Component} from "react";
import {Audio} from "../Icons";
import {BadgeIcon} from "../Icons";
import {Bold} from "../Icons";
import {Bolt} from "../Icons";
import {Bookmark} from "../Icons";
import {Box} from "../Icons";
import {Brush} from "../Icons";
import {Delete} from "../Icons";
import {Dollar} from "../Icons";
import {Eject} from "../Icons";
import {Eye} from "../Icons";
import {Fire} from "../Icons";
import {Flag} from "../Icons";
import {Minus} from "../Icons";
import {Plus} from "../Icons";
import {ErrorLoading} from "../Icons";
import {SuccessLoading} from "../Icons";

interface IconType {
  name?: string;
  size?: "small" | "medium" | "large";
  className?: string;
  color?: string;
  style?: React.CSSProperties;
}

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

const Icon = ({color, className, name, size, style}: IconType) => {
  if (name == "Audio") {
    return (
      <>
        {
          <Audio
            name={name}
            fill={color}
            width={size != undefined ? iconSize[size].width : 24}
            height={size != undefined ? iconSize[size].height : 24}
            style={style}
            className={className}
          />
        }
      </>
    );
  } else if (name == "Badge ") {
    return (
      <>
        {
          <BadgeIcon
            name={name}
            fill={color}
            width={size != undefined ? iconSize[size].width : 24}
            height={size != undefined ? iconSize[size].height : 24}
            style={style}
            className={className}
          />
        }
      </>
    );
  } else if (name == "Bold") {
    return (
      <>
        {
          <Bold
            name={name}
            fill={color}
            width={size != undefined ? iconSize[size].width : 24}
            height={size != undefined ? iconSize[size].height : 24}
            style={style}
            className={className}
          />
        }
      </>
    );
  } else if (name == "Bolt") {
    return (
      <>
        {
          <Bolt
            name={name}
            fill={color}
            width={size != undefined ? iconSize[size].width : 24}
            height={size != undefined ? iconSize[size].height : 24}
            style={style}
            className={className}
          />
        }
      </>
    );
  } else if (name == "Bookmark") {
    return (
      <>
        {
          <Bookmark
            name={name}
            fill={color}
            width={size != undefined ? iconSize[size].width : 24}
            height={size != undefined ? iconSize[size].height : 24}
            style={style}
            className={className}
          />
        }
      </>
    );
  } else if (name == "Box") {
    return (
      <>
        {
          <Box
            name={name}
            fill={color}
            width={size != undefined ? iconSize[size].width : 24}
            height={size != undefined ? iconSize[size].height : 24}
            style={style}
            className={className}
          />
        }
      </>
    );
  } else if (name == "Brush") {
    return (
      <>
        {
          <Brush
            name={name}
            fill={color}
            width={size != undefined ? iconSize[size].width : 24}
            height={size != undefined ? iconSize[size].height : 24}
            style={style}
            className={className}
          />
        }
      </>
    );
  } else if (name == "Delete") {
    return (
      <>
        {
          <Delete
            name={name}
            fill={color}
            width={size != undefined ? iconSize[size].width : 24}
            height={size != undefined ? iconSize[size].height : 24}
            style={style}
            className={className}
          />
        }
      </>
    );
  } else if (name == "Dollar") {
    return (
      <>
        {
          <Dollar
            name={name}
            fill={color}
            width={size != undefined ? iconSize[size].width : 24}
            height={size != undefined ? iconSize[size].height : 24}
            style={style}
            className={className}
          />
        }
      </>
    );
  } else if (name == "Eject") {
    return (
      <>
        {
          <Eject
            name={name}
            fill={color}
            width={size != undefined ? iconSize[size].width : 24}
            height={size != undefined ? iconSize[size].height : 24}
            style={style}
            className={className}
          />
        }
      </>
    );
  } else if (name == "Eye") {
    return (
      <>
        {
          <Eye
            name={name}
            fill={color}
            width={size != undefined ? iconSize[size].width : 24}
            height={size != undefined ? iconSize[size].height : 24}
            style={style}
            className={className}
          />
        }
      </>
    );
  } else if (name == "Plus") {
    return (
      <>
        {
          <Plus
            name={name}
            fill={color}
            width={size != undefined ? iconSize[size].width : 24}
            height={size != undefined ? iconSize[size].height : 24}
            style={style}
            className={className}
          />
        }
      </>
    );
  } else if (name == "Flag") {
    return (
      <>
        {
          <Flag
            name={name}
            fill={color}
            width={size != undefined ? iconSize[size].width : 24}
            height={size != undefined ? iconSize[size].height : 24}
            style={style}
            className={className}
          />
        }
      </>
    );
  } else if (name == "Fire") {
    return (
      <>
        {
          <Fire
            name={name}
            fill={color}
            width={size != undefined ? iconSize[size].width : 24}
            height={size != undefined ? iconSize[size].height : 24}
            style={style}
            className={className}
          />
        }
      </>
    );
  } else if (name == "Minus") {
    return (
      <>
        {
          <Minus
            name={name}
            fill={color}
            width={size != undefined ? iconSize[size].width : 24}
            height={size != undefined ? iconSize[size].height : 24}
            style={style}
            className={className}
          />
        }
      </>
    );
  } else if (name == "ErrorLoading") {
    return (
      <>
        {
          <ErrorLoading
            width={size != undefined ? iconSize[size].width : 64}
            height={size != undefined ? iconSize[size].height : 64}
            style={style}
            className={className}
          />
        }
      </>
    );
  } else if (name == "SuccessLoading") {
    return (
      <>
        {
          <SuccessLoading
            width={size != undefined ? iconSize[size].width : 64}
            height={size != undefined ? iconSize[size].height : 64}
            style={style}
            className={className}
          />
        }
      </>
    );
  } else {
    return <>{<Plus fill={"white"} width={24} className={className} />}</>;
  }
};

export default Icon;
