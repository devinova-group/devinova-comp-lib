import { LoadError } from "./LoadError";
import { LoadSuccess } from "./LoadSuccess";
import Loading from "./Loading.component.styles";
import { loadingProps } from "./Loading.component.types";
import React from "react";



const Loader = ({ speed, progress, style}: loadingProps)=>{

if(progress === "success"){
    return (   
        <LoadSuccess speed={speed} style={style}/>
    )
} else if (progress === "error"){
    return (
        <LoadError  speed={speed} style={style} />
    )
} else {
    return (
    <Loading  speed={speed} style={style}/>
    )
}
}
export default Loader;