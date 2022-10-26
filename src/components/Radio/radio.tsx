import React from "react";
import {Label, Radio} from "./inputStyles";
import styled from "@emotion/styled/macro";
import {InputElementProps} from "./radio.props";

const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const RadioButton = React.forwardRef<
  HTMLInputElement,
  InputElementProps
>(
  (
    {id, label, disabled, value, type, key, onChange, variant, ...rest},
    ref
  ) => {
    return (
      <Wrapper key={key}>
        <Radio
          type="radio"
          id="radio-button"
          disabled={disabled}
          {...rest}
          onChange={onChange}
        />
        <Label disabled={disabled}>{label}</Label>
      </Wrapper>
    );
  }
);
