import {typography} from "../../theme";
import styled from "@emotion/styled";

const color = "white";

export const Button = styled.button`
padding: 32px;
background-color: hotpink;
font-size: 24px;
border-radius: 4px;
font-family: ${typography.Neucha};
&:hover {
  color: ${color};
`;
