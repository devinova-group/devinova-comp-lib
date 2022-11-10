import styled from "@emotion/styled";
import BottomNav from "./BottomNav"

export const Div = styled.div`
    display : inline-flex;
    position : absolute;
    bottom: 1px;
    margin-left:-5px;
    width: 100%;
`

export const MenuItems = styled.span`
    display: inline-flex;
    justify-content: center;
    width: 100%;
`

export const MenuItemLinks = styled.a`
    display: flex;
    flex-direction: column;
    color: #ffffff;

`
export const ItemDiv = styled.div({
    display:"flex",
    width:"48px",
    height: "48px",
    backgroundColor: "#4C3A80",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
    borderRadius: "8px",
    [".icon"] :{
    display: "flex",
    margin: "12px"
    },
    "&:active " : {
     width: "48px",
     height: "48px",
     backgroundColor: "rgba(255, 254, 251, 0.3)",
     border: "2px solid #4C3A80",
     boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
     borderRadius: "8px",
     [".icon"] :{
        display: "flex",
        margin: "12px",
        fill: "#4C3A80",
        },
    }
})

