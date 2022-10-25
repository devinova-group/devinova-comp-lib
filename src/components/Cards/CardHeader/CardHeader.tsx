import React from "react";
import Typography from "../../Typography";
import { CardHeaderProps } from "../Card.props";
import { StyledCardHeader } from "./CardHeader.Styles";

export const CardHeader = ({
  title,
  style,
  subheader,
  subheaderTypographyProps,
  titleTypographyProps,
}: CardHeaderProps) => {
  return title && subheader ? (
    <>
      {titleTypographyProps && subheaderTypographyProps ? (
        <StyledCardHeader>
          <Typography variant={titleTypographyProps} style={style}>
            {title}
          </Typography>
          <Typography variant={subheaderTypographyProps} style={style}>
            {subheader}
          </Typography>
        </StyledCardHeader>
      ) : titleTypographyProps ? (
        <StyledCardHeader>
          <Typography variant={titleTypographyProps} style={style}>
            {title}
          </Typography>
          <Typography variant="NSOverline" style={style}>
            {subheader}
          </Typography>
        </StyledCardHeader>
      ) : subheaderTypographyProps ? (
        <StyledCardHeader>
          <Typography variant="h5QS" style={style}>
            {title}
          </Typography>
          <Typography variant={subheaderTypographyProps} style={style}>
            {subheader}
          </Typography>
        </StyledCardHeader>
      ) : (
        <StyledCardHeader>
          <Typography variant="h5QS" style={style}>
            {title}
          </Typography>
          <Typography variant="NSOverline" style={style}>
            {subheader}
          </Typography>
        </StyledCardHeader>
      )}
    </>
  ) : titleTypographyProps ? (
    <Typography variant={titleTypographyProps} style={style}>
      {title}
    </Typography>
  ) : (
    <Typography variant="h5QS" style={style}>
      {title}
    </Typography>
  );
};
