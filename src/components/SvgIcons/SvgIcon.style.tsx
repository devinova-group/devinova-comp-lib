import styled, { CSSObject } from "@emotion/styled";
import React from "react";
import { IProps } from "./SvgIcon.types";
import { useDynamicSvgImport } from "./useDynamicSvgImport";


export function SvgIcons(props: IProps) {
  const { iconName, svgProp, className } = props;
  const { SvgIcon } = useDynamicSvgImport(iconName);
  return (
    <>
      {SvgIcon && (
        <SvgIcon 
        className={className}
        {...svgProp}
         /> 
      )}
    </>
  );
}

const base :CSSObject ={
  display:"inline-flex", 
  position:"inherit",
  zIndex:1, 
  paddingTop:"1px",
}


export const Svg = styled(SvgIcons)`
${base},
`