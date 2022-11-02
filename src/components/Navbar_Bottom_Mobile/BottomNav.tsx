import React from "react";
import Icon from "../SvgIcons/Icon.component";
import { NavProps } from "./BottomNav.types";
import {Div, MenuItems, MenuItemLinks, ItemDiv } from "./BottomNav.styles"


const BottomNav =({
onClick,
className,
style
}:NavProps)  =>{

 return (
    <>
    <Div className={className} style={style}>
    <MenuItems>
    <MenuItemLinks  onClick={onClick}>
    <ItemDiv>
    <Icon className="icon" name="Menu" color="white"/>  
    </ItemDiv>
    </MenuItemLinks>
    </MenuItems>

    <MenuItems>
    <MenuItemLinks onClick={onClick}>
    <ItemDiv >
    <Icon className="icon"  name="Code" color="white"/>  
    </ItemDiv>
    </MenuItemLinks>
    </MenuItems>

    <MenuItems>
    <MenuItemLinks onClick={onClick}>
    <ItemDiv >
    <Icon className="icon" name="Bookmark" color="white"/>  
    </ItemDiv>
    </MenuItemLinks>
    </MenuItems>
    </Div>
    </>
 )

}

export default BottomNav