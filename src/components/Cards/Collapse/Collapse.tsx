import {css} from "@emotion/css";
import React, {useEffect, useRef, useState} from "react";
import {CollapseProps} from "../Card.props";
import {CollapseDiv} from "./Collapse.Styles";
import {CollapsedDiv} from "./Collapsed.styles";

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
      <a
        className={css`
          cursor: pointer;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        `}
        onClick={() => {
          setOpen(false);
        }}
      >
        Close
      </a>
    </CollapseDiv>
  ) : (
    <CollapsedDiv orientation={orientation} style={style} width={width}>
      {title}
      <a
        className={css`
          cursor: pointer;
          position: absolute;
          right: 0;
        `}
        onClick={() => {
          setOpen(true);
        }}
      >
        Open
      </a>
    </CollapsedDiv>
  );
};
