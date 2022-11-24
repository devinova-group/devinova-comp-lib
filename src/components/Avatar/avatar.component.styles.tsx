import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { useState } from "react";
import { typography } from "../../theme";
import { AvatarProps } from "./avatar.component.types";
import { array, array2 } from "./avatar.data";

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


const Image = styled.img`
position: absolute;
width: 64px;
height: 64px;
border-radius:50px;

`
const Input = styled.input`
display:flex;
justify-content: center;
align-item: center;
margin-left: -2px;
background: transparent;
border: none;
width: 25px;
color: #FFF;
font-weight: 800;
font-family: ${typography.Quicksand}
`


export const Avatar = ({
src,
userName,
className,
style,
dark
}:AvatarProps)=>{

const [items, setItems] = useState(array)
const [datas, setDatas] = useState(array2)

 const handleClick = (number:number)=>{
    const triggeredItems = items.map((item) => {
        if (item.id !== number) {
          item.isShow = !item.isShow;
        }
        return item;
      });
      setItems(triggeredItems);
} 

const handleAnotherClick = (number:number)=>{
    const triggeredDatas = datas.map((data) => {
        if (data.id !== number) {
            data.isShow = !data.isShow;
        }
        return data;
      });
      setDatas(triggeredDatas);
} 

const toInitials = (str : string) => 
  str
   .split(" ") 
   .map(c => c.charAt(0).toUpperCase())
   .join("") 
   .concat(str.charAt(1).toUpperCase())
   .substring(0, 2); 

const name = toInitials(userName !== undefined ? userName : "JD")
return(
   <>

{ src &&

<AvatarBox>
            <BigCircle>
            <div className={css({
                    display:"flex",
                    position:"initial",
                    zIndex:"9999",
                    })}>
            <Image src={src} />
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

               
        </AvatarBox>}

     {  !src &&
     
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
            <Input 
            type="text"  
            value={name}
            readOnly
            >
            </Input>
            </div>
            
            </BigCircle>
           

                <div >
                {datas.map(({id, component, isShow})=>{
                            return(
                                <div 
                                key={id}
                                onClick={()=>handleAnotherClick(id)}
                                hidden={isShow}
                                >
                                    { component}
                                </div>
                            )
                        })}
                 </div >

               
        </AvatarBox>}
        </>   
 )
}