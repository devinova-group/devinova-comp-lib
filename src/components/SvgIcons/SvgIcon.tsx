import { IconProps } from "./SvgIcon.types";
import { Svg } from "./SvgIcon.style";
import React from "react";

const Icon  =
({
iconName,
color, 
className,
}: IconProps)=>{
  return(
    <Svg
    iconName={iconName} 
    svgProp={{fill:color}} 
    className={className} 
    />
  )
}  


 export default Icon
