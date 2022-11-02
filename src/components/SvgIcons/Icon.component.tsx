import React from "react";
import { Audio               } from "../IconAssets";
import { ArrowBottom         } from "../IconAssets";
import { ArrowLeft           } from "../IconAssets";
import { ArrowRight          } from "../IconAssets";
import { ArrowTop            } from "../IconAssets";
import { Badge               } from "../IconAssets";
import { Bold                } from "../IconAssets";
import { Bolt                } from "../IconAssets";
import { BookMark            } from "../IconAssets";
import { Box                 } from "../IconAssets";
import { Brush               } from "../IconAssets";
import { Check               } from "../IconAssets";
import { ChevronBottom       } from "../IconAssets";
import { ChevronLeft         } from "../IconAssets";
import { ChevronRight        } from "../IconAssets";
import { ChevronTop          } from "../IconAssets";
import { Clock               } from "../IconAssets";
import { Copywriting         } from "../IconAssets";
import { Code                } from "../IconAssets";
import { Delete              } from "../IconAssets";
import { Dollar              } from "../IconAssets";
import { Eject               } from "../IconAssets";
import { Eye                 } from "../IconAssets";
import { ErrorLoading        } from "../IconAssets";
import { Fire                } from "../IconAssets";
import { Flag                } from "../IconAssets";
import { Menu                } from "../IconAssets";
import { Minus               } from "../IconAssets";
import { Plus                } from "../IconAssets";
import { Share               } from "../IconAssets";
import { SuccessLoading      } from "../IconAssets";

interface IconType {
    name ?: string;
    size?: "small" | "medium" |  "large";
    className?: string;
    color?: string;
    style?:React.CSSProperties;
}

const iconSize = {
    small: {
      height:16,
      width:16,
  
    },
    medium: {
      height:24,
      width:24,
  
    },
    large: {
      height:30,
      width:30,
  
    },
  };

const Icon = ({color, className, name, size, style}:IconType ) => {
if (name == "Audio" ) {
return (
            <>
            {<Audio name={name} fill={color} width={size != undefined ? iconSize[size].width : 24} height={size != undefined ? iconSize[size].height : 24} style={style} className={className}/>}
            </>
)}
else if (name == "ArrowBottom" ) {
    return (
            <>
            {<ArrowBottom  name={name} fill={color} width={size != undefined ? iconSize[size].width : 24} height={size != undefined ? iconSize[size].height : 24} style={style} className={className}/>}
            </>
    )}
else if (name == "ArrowLeft" ) {
    return (
            <>
            {<ArrowLeft  name={name} fill={color} width={size != undefined ? iconSize[size].width : 24} height={size != undefined ? iconSize[size].height : 24} style={style} className={className}/>}
            </>
    )}
else if (name == "ArrowRight" ) {
    return (
            <>
            {<ArrowRight   name={name} fill={color} width={size != undefined ? iconSize[size].width : 24} height={size != undefined ? iconSize[size].height : 24} style={style} className={className}/>}
            </>
    )}
else if (name == "ArrowTop" ) {
    return (
            <>
            {<ArrowTop   name={name} fill={color} width={size != undefined ? iconSize[size].width : 24} height={size != undefined ? iconSize[size].height : 24} style={style} className={className}/>}
            </>
    )}
    
else if (name == "Badge" ) {
    return (
            <>
            {<Badge  name={name} fill={color} width={size != undefined ? iconSize[size].width : 24} height={size != undefined ? iconSize[size].height : 24} style={style} className={className}/>}
            </>
    )}
else if (name == "Bold" ) {
    return (
            <>
            {<Bold name={name} fill={color} width={size != undefined ? iconSize[size].width : 24} height={size != undefined ? iconSize[size].height : 24} style={style} className={className}/>}
            </>
    )}
else if (name == "Bolt" ) {
    return (
            <>
            {<Bolt name={name} fill={color} width={size != undefined ? iconSize[size].width : 24} height={size != undefined ? iconSize[size].height : 24} style={style} className={className}/>}
            </>
    )}
else if (name == "Bookmark" ) {
    return (
            <>
            {<BookMark name={name} fill={color} width={size != undefined ? iconSize[size].width : 24} height={size != undefined ? iconSize[size].height : 24} style={style} className={className}/>}
            </>
    )}
else if (name == "Box" ) {
    return (
            <>
            {<Box name={name} fill={color} width={size != undefined ? iconSize[size].width : 24} height={size != undefined ? iconSize[size].height : 24} style={style} className={className}/>}
            </>
    )}
else if (name == "Brush" ) {
    return (
            <>
            {<Brush name={name} fill={color} width={size != undefined ? iconSize[size].width : 24} height={size != undefined ? iconSize[size].height : 24} style={style} className={className}/>}
            </>
    )}
else if (name == "Check" ) {
    return (
            <>
            {<Check name={name} fill={color} width={size != undefined ? iconSize[size].width : 24} height={size != undefined ? iconSize[size].height : 24} style={style} className={className}/>}
            </>
    )}
else if (name == "ChevronBottom" ) {
    return (
            <>
            {<ChevronBottom name={name} fill={color} width={size != undefined ? iconSize[size].width : 24} height={size != undefined ? iconSize[size].height : 24} style={style} className={className}/>}
            </>
    )}
else if (name == "ChevronLeft" ) {
    return (
            <>
            {<ChevronLeft name={name} fill={color} width={size != undefined ? iconSize[size].width : 24} height={size != undefined ? iconSize[size].height : 24} style={style} className={className}/>}
            </>
    )}
else if (name == "ChevronRight" ) {
    return (
            <>
            {<ChevronRight name={name} fill={color} width={size != undefined ? iconSize[size].width : 24} height={size != undefined ? iconSize[size].height : 24} style={style} className={className}/>}
            </>
    )}
else if (name == "ChevronTop" ) {
    return (
            <>
            {<ChevronTop name={name} fill={color} width={size != undefined ? iconSize[size].width : 24} height={size != undefined ? iconSize[size].height : 24} style={style} className={className}/>}
            </>
    )}
else if (name == "Clock" ) {
    return (
            <>
            {<Clock name={name} fill={color} width={size != undefined ? iconSize[size].width : 24} height={size != undefined ? iconSize[size].height : 24} style={style} className={className}/>}
            </>
    )}
else if (name == "Copywriting" ) {
    return (
            <>
            {<Copywriting name={name} fill={color} width={size != undefined ? iconSize[size].width : 24} height={size != undefined ? iconSize[size].height : 24} style={style} className={className}/>}
            </>
    )}
else if (name == "Code" ) {
    return (
            <>
            {<Code name={name} fill={color} width={size != undefined ? iconSize[size].width : 24} height={size != undefined ? iconSize[size].height : 24} style={style} className={className}/>}
            </>
    )}
else if (name == "Delete" ) {
    return (
            <>
            {<Delete name={name} fill={color} width={size != undefined ? iconSize[size].width : 24} height={size != undefined ? iconSize[size].height : 24} style={style} className={className}/>}
            </>
    )}
else if (name == "Dollar" ) {
    return (
            <>
            {<Dollar name={name} fill={color} width={size != undefined ? iconSize[size].width : 24} height={size != undefined ? iconSize[size].height : 24} style={style} className={className}/>}
            </>
    )}
else if (name == "Eject" ) {
    return (
            <>
            {<Eject name={name} fill={color} width={size != undefined ? iconSize[size].width : 24} height={size != undefined ? iconSize[size].height : 24} style={style} className={className}/>}
            </>
    )}
else if (name == "Eye" ) {
    return (
            <>
            {<Eye name={name} fill={color} width={size != undefined ? iconSize[size].width : 24} height={size != undefined ? iconSize[size].height : 24} style={style} className={className}/>}
            </>
    )}
else if (name == "Plus" ) {
    return (
            <>
            {<Plus name={name} fill={color} width={size != undefined ? iconSize[size].width : 24} height={size != undefined ? iconSize[size].height : 24} style={style} className={className}/>}
            </>
    )}
else if (name == "Flag" ) {
    return (
            <>
            {<Flag name={name} fill={color} width={size != undefined ? iconSize[size].width : 24} height={size != undefined ? iconSize[size].height : 24} style={style} className={className}/>}
            </>
    )}
else if (name == "Fire" ) {
    return (
            <>
            {<Fire name={name} fill={color} width={size != undefined ? iconSize[size].width : 24} height={size != undefined ? iconSize[size].height : 24} style={style} className={className}/>}
            </>
    )}
else if (name == "Menu" ) {
    return (
            <>
            {<Menu name={name} fill={color} width={size != undefined ? iconSize[size].width : 24} height={size != undefined ? iconSize[size].height : 24} style={style} className={className}/>}
            </>
    )}
else if (name == "Minus" ) {
    return (
            <>
            {<Minus name={name} fill={color} width={size != undefined ? iconSize[size].width : 24} height={size != undefined ? iconSize[size].height : 24} style={style} className={className}/>}
            </>
    )}
else if (name == "Share " ) {
    return (
            <>
            {<Share  width={size != undefined ? iconSize[size].width : 64} height={size != undefined ? iconSize[size].height : 64} style={style} className={className}/>}
            </>
    )}
else if (name == "ErrorLoading" ) {
    return (
            <>
            {<ErrorLoading width={size != undefined ? iconSize[size].width : 64} height={size != undefined ? iconSize[size].height : 64} style={style} className={className}/>}
            </>
    )}
else if (name == "SuccessLoading" ) {
    return (
            <>
            {<SuccessLoading  width={size != undefined ? iconSize[size].width : 64} height={size != undefined ? iconSize[size].height : 64} style={style} className={className}/>}
            </>
    )}
else{ return (
    <>
    {<Plus  fill={"white"} width={24} className={className}/>}
    </>
)}
}

export default Icon