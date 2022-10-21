import { Text } from "./typography.component.styles";
import { TypographyProps, variantMapping } from "./typography.component.props";
import React from "react";

const Typography: React.FC<TypographyProps> = ({
  variant,
  as,
  children,
  color,
  style,
  textAlign,
}) => {
  let Tag;
  if (!as && variantMapping[variant as keyof typeof variantMapping]) {
    let element = variantMapping[variant as keyof typeof variantMapping];
    Tag = element;
  } else {
    Tag = as ? as : "p";
  }

  return (
    <Text
      as={Tag}
      variant={variant}
      color={color}
      style={style}
      textAlign={textAlign}
    >
      {children}
    </Text>
  );
};

export default Typography;
