import Icon from "../SvgIcons/SvgIcon";
import Loading from "./Loading.component.styles";
import {useState, useEffect } from "react";
import { loadingProps } from "./Loading.component.types";
import React from "react";

export function LoadSuccess ({ speed, style}: loadingProps){
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setLoading(false);
        }, 5000);
        return ()=>clearTimeout(timer)
    }, []);
    
    if(loading ){
        return (<Loading speed={speed} style={style} />)
    }     return(
        <Icon iconName="successLoading" />
    );
}

