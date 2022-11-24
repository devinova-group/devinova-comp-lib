import React from "react";
import { colorPalette } from "../../theme";
import Icon from "../SvgIcons/Icon.component";
import { css } from "@emotion/css";
import styled from "@emotion/styled";


interface props{
  size?: "small" | "medium" | "large";
  iconName?: string;
  isHover?: boolean;
  variant? : 'primary' | 'error' | 'positive' ;
  isDisabled ?: boolean;
  color?: string;
}

const buttonColor = {
  primary: {
    background: colorPalette.DeviDaisy[500],
  },
  error: {
    background: colorPalette.Status.Error,
  },
  positive: {
    background: colorPalette.Status.Positive,
  }
}

const disable = {
  primary: {
    background: "rgba(96, 68, 181, 0.35)",
  },
  error: {
    background: "rgba(193, 41, 69, 0.55)",
  },
  positive: {
    background: "rgba(38, 150, 43, 0.5)",
  }
}


const Button = styled.button<props>`
display: flex;
justify-content: center;
align-items:center;
`
const buttonSize = {
  small: {
    height:42,
    width:42,
    borderRadius: "4px",
  },
  medium: {
    height:60,
    width:60,
    borderRadius: "6px",
  },
  large: {
    height:72,
    width:72,
    borderRadius: "8px",
  },
};

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



function IconButton 
({
  size,
  iconName,
  isHover,
  variant,
  isDisabled,
  color,
}:props){


return(
<>

{isHover == true && 
<Button 
className={css({
                width: size !== undefined ? buttonSize[size].width : buttonSize["medium"].width,
                height:size !== undefined ?  buttonSize[size].height : buttonSize["medium"].height,
                borderRadius:size !== undefined ?  buttonSize[size].borderRadius: buttonSize["medium"].borderRadius ,
                background: variant !== undefined ? buttonColor[variant].background : colorPalette.DeviDaisy[500],         
               ["svg"]: {
                display:"inline-flex",
                fill: color,
                [":hover"]:{
                  fill: variant !== undefined ? buttonColor[variant].background : colorPalette.DeviDaisy[500]} 
               },
               [":hover"]:{
                boxSizing:"border-box",
                color:colorPalette.DeviDaisy[500],
                backgroundColor: "transparent",
                border: "2px solid #6044B5",
                boxShadow: "(5px 10px 20px rgba(0,0,0,0.25)",
                }
              })
          } 
variant={variant}
size={size}
>

<Icon 
className="iconsec"
name={iconName}
size={size}
color={color}
/>  
</Button>}

{isDisabled == true && 
<Button 
isDisabled={true}
className={css({            
               width: size !== undefined ? buttonSize[size].width : buttonSize["medium"].width,
               height:size !== undefined ?  buttonSize[size].height : buttonSize["medium"].height,
               borderRadius:size !== undefined ?  buttonSize[size].borderRadius: buttonSize["medium"].borderRadius ,
               cursor:"not-allowed",
               color:colorPalette.Text.White,
               background: variant !== undefined ? disable[variant].background : "rgba(96, 68, 181, 0.35)",
               boxShadow: "5px 10px 20px rgba(0, 0, 0, 0.25)",
               ["svg"]:{
                display:"inline-flex",
                width: size !== undefined ?  iconSize[size].width : iconSize["medium"].width,
                height: size !== undefined ? iconSize[size].height : iconSize["medium"].height,
                fill:"white",
               }
               })
          } 
variant={variant}
size={size}
>

<Icon 
className="icon" 
name={iconName}
size={size}
color={color}
/>  
</Button>}
{!isHover && !isDisabled && 
<Button 
        className={css({
          width: size !== undefined ? buttonSize[size].width : buttonSize["medium"].width,
          height:size !== undefined ?  buttonSize[size].height : buttonSize["medium"].height,
          borderRadius:size !== undefined ?  buttonSize[size].borderRadius: buttonSize["medium"].borderRadius ,
          background: variant !== undefined ? buttonColor[variant].background : colorPalette.DeviDaisy[500],
          boxShadow: "5px 10px 20px rgba(0, 0, 0, 0.25)",
          ":active": {
            backgroundColor: "#4C3A80",
          },
          ["svg"]: {
            display: "inline-flex",
            width: size !== undefined ?  iconSize[size].width : iconSize["medium"].width,
            height: size !== undefined ? iconSize[size].height : iconSize["medium"].height,
            fill: "white",
          }
        })}
        variant={variant}
        size={size}
        >

<Icon 
className="icon" 
name={iconName}
size={size}
color={color}
/>  
</Button>}
</>
  )

}

export default IconButton


