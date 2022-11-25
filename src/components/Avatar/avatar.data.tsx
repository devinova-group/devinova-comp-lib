import React from "react";
import { Check } from "../Icons";
import { X } from "../Icons";
import { Pencil } from "../Icons";
import { Minus } from "../Icons";
import { Clock } from "../Icons";
import styled from "@emotion/styled";
import { css } from "@emotion/css";


const Ellipse14 =styled.div({
    position: "relative",
    left: "60.94%",
    right: "10.94%",
    top: "45px",
    borderRadius: "55%",
    width: "24px",
    height: "24px",
    ["svg"]: {
        fill: "white",
        width:"9.37px",
        height:"9.37px",
        paddingTop: "7px",
        paddingLeft: "7px",
        paddingRight:"6px",
        paddingBottom: "6px",
    }

})



export const array = [
    {id:1, 
    component:
    <Ellipse14 className={css({backgroundColor:"#26962B"})}>
    <Check  />
    </Ellipse14>, 
    isShow: false},
    {id:2, 
    component: 
    <Ellipse14 className={css({backgroundColor:"#00A3FF"})}>
    <Pencil />
    </Ellipse14>, 
    isShow: true},
    {id:3, 
    component: 
    <Ellipse14 className={css({backgroundColor:"#C12945"})}>
    <Minus />
    </Ellipse14>, 
    isShow: true},
    {id:4, 
    component: 
    <Ellipse14 className={css({backgroundColor:"#C12945"})}/> , 
    isShow: true},
    {id:5, 
    component: 
    <Ellipse14 className={css({backgroundColor:"#FFC34E"})}>
    <Clock />
    </Ellipse14>,
    isShow: true},
    {id:6, 
    component: 
    <Ellipse14 className={css({backgroundColor:"#6E6893"})}>
    <X />
    </Ellipse14>,
    isShow: true},
    {id:7, 
    component: 
    <Ellipse14 className={css({backgroundColor:"#C12945"})}>
    <X />
    </Ellipse14>,   
    isShow: true},
]

export const array2 = [
    {id:11, 
    component:
    <Ellipse14 className={css({backgroundColor:"#26962B"})}>
    <Check />
    </Ellipse14>, 
    isShow: false},
    {id:12, 
    component: 
    <Ellipse14 className={css({backgroundColor:"#00A3FF"})}>
    <Pencil />
    </Ellipse14>, 
    isShow: true},
    {id:13, 
    component: 
    <Ellipse14 className={css({backgroundColor:"#C12945"})}>
    <Minus />
    </Ellipse14>, 
    isShow: true},
    {id:14, 
    component: 
    <Ellipse14 className={css({backgroundColor:"#C12945"})}/> , 
    isShow: true},
    {id:15, 
    component: 
    <Ellipse14 className={css({backgroundColor:"#FFC34E"})}>
    <Clock />
    </Ellipse14>,
    isShow: true},
    {id:16, 
    component: 
    <Ellipse14 className={css({backgroundColor:"#6E6893"})}>
    <X />
    </Ellipse14>,
    isShow: true},
    {id:17, 
    component: 
    <Ellipse14 className={css({backgroundColor:"#C12945"})}>
    <X />
    </Ellipse14>,   
    isShow: true},
]