import { Text } from "./typography.component.styles";
import { TypographyProps, variantMapping } from "./typography.component.props";
import React from "react";

const Typography: React.FC<TypographyProps> = ({
  variant,
  as,
  children,
  color,
  style,
}) => {
  let Tag;
  if (as) {
    Tag = as ? as : "p";
  } else if (variantMapping[variant as keyof typeof variantMapping]) {
    let element = variantMapping[variant as keyof typeof variantMapping];
    Tag = element;
  } else {
    Tag = as ? as : "p";
  }

  return (
    <Text as={Tag} variant={variant} color={color} style={style}>
      {children}
    </Text>
  );
};

export default Typography;
