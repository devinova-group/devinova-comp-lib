import { Typography } from "./typography.component.styles";
import { TypographyProps } from "./typography.component.props";
import React from "react";

export const Text: React.FC<TypographyProps> = ({ variant, as, children }) => {
  let Tag = as ? as : "p";

  return (
    <Typography as={Tag} variant={variant}>
      {children}
    </Typography>
  );
};
