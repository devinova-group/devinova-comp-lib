import { Text } from "./typography.component.styles";
import { TypographyProps, variantMapping } from "./typography.component.props";
import React from "react";

const Typography: React.FC<TypographyProps> = ({ variant, as, children }) => {
  let Tag = as;
  if (variantMapping[variant as keyof typeof variantMapping]) {
    let element = variantMapping[variant as keyof typeof variantMapping];
    Tag = element;
  } else {
    Tag = as ? as : "p";
  }

  return (
    <Text as={Tag} variant={variant}>
      {children}
    </Text>
  );
};

export default Typography;
