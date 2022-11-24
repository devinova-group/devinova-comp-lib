import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { Check } from "../Icons";
import { X } from "../Icons";
import { Pencil } from "../Icons";
import { Minus } from "../Icons";
import { Clock } from "../Icons";
import { useState } from "react";
import { typography } from "../../theme";


const AvatarBox = styled.div({
    width: "64px",
    height: "64px",
    left: "16px",
    top: "16px",
    filter: "drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.25))",
})

const BigCircle= styled.div({
    position: "absolute",
    width: "64px",
    height: "64px",
    borderRadius:"50px",
    backgroundColor: "#6044B5",
})

const Ellipse14 =styled.div`
    position: relative;
    left: 60.94%;
    right: 10.94%;
    top: 45px;
    border-radius: 55%;
    width: 24px;
    height: 24px;
    svg{
        fill: white;
        width: 14px;
        height: 14px;
        padding: 5px;
    }
    `


const array = [
    {id:1, 
    component:
    <Ellipse14 className={css({backgroundColor:"#26962B"})}>
    <Check/>
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


const Avatar = ()=>{
const [items, setItems] = useState(array)


 const handleClick = (number:number)=>{
    const triggeredItems = items.map((item) => {
        if (item.id !== number) {
          item.isShow = !item.isShow;
        }
        return item;
      });
      setItems(triggeredItems);
} 


    return (
        <AvatarBox>
            <BigCircle>
                <div className={css({
                    display:"flex",
                    position:"initial",
                    color:"white",
                    padding:"23px",
                    fontWeight:"500",
                    fontFamily: typography.Quicksand
                    })}>
                 JD
                </div>
            </BigCircle>


                <div >
                {items.map(({id, component, isShow})=>{
                            return(
                                <div 
                                key={id}
                                onClick={()=>handleClick(id)}
                                hidden={isShow}
                                >
                                    { component}
                                </div>
                            )
                        })}
                 </div >

            
        </AvatarBox>
    )
}

export default Avatar