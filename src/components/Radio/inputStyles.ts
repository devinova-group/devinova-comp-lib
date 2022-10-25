import styled from "@emotion/styled/macro"
import { typography } from "../../theme";

export const Label = styled.label<{ disabled?: boolean; }>`
   font-size: 1rem;
   font-family: ${typography.Quicksand};
   color: #585858;
   ${({ disabled }) => disabled && `
      color: #585858 ; 
      cursor: not-allowed;
   `}
`;

export const Radio = styled.input`
   -webkit-appearance: none;
   appearance: none;
   box-shadow: 5px 10px 20px rgba(0,0,0,0.2);
   margin: 0;
   width: 1.5em;
   height: 1.5em;
   border: 2px solid #7E778D;
   border-radius: 50%;
   ::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 0.75em;
      height: 0.75em;
      margin: 3px;
   }
   

 :checked {
    ::after {
       background-color: #4C3A80;
    }
    border: 2px solid #4C3A80;
 }

 :disabled {
    cursor: not-allowed;
    border: 2px solid #B4B4B4;
    background-color: #C5C5C5;
    }
 }
`;

