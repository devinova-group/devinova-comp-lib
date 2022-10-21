import React from "react";
import { CardMediaProps } from "../Card.props";
import { StyledCardMedia } from "./CardMedia.Styles";

export const CardMedia = ({
  component,
  height,
  src,
  style,
  alt,
  image,
  width,
}: CardMediaProps) => {
  return (
    <StyledCardMedia
      as={component}
      component={component}
      height={height}
      width={width}
      image={image}
      alt={alt}
      src={src}
      style={style}
    ></StyledCardMedia>
  );
};
