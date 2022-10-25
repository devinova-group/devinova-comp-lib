import {css} from "@emotion/css";
import React, {useEffect, useRef, useState} from "react";
import {ChevronDown, ChevronUp} from "../..";
import {CollapseProps} from "../Card.props";
import {CollapseDiv} from "./Collapse.Styles";
import {CollapsedDiv} from "./Collapsed.styles";

const centerOpenIcon = css`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const Collapse = ({
  children,
  title,
  orientation,
  width,
  style,
}: CollapseProps) => {
  const [open, setOpen] = useState(false);
  return open ? (
    <CollapseDiv orientation={orientation} style={style} width={width}>
      {children}
      <ChevronUp
        height={24}
        className={centerOpenIcon}
        onClick={() => {
          setOpen(false);
        }}
      />
    </CollapseDiv>
  ) : (
    <CollapsedDiv orientation={orientation} style={style} width={width}>
      {title}
      <ChevronDown
        height={24}
        className={centerOpenIcon}
        onClick={() => {
          setOpen(true);
        }}
      />
    </CollapsedDiv>
  );
};
