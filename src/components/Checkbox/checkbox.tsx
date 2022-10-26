import * as React from "react";
import {CheckboxRootProps} from "./checkbox.props";
import {StyledCheckmark} from "./checkmark";
import {CheckboxRadioBase} from "./checkmarkRadioBase";
import {StyledCheckbox} from "./styledCheckbox";
import {CheckboxContainer} from "./checkboxContainer";

export type CheckboxProps = Omit<CheckboxRootProps, "type" | "partials">;

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxRootProps>(
  (props, ref) => {
    return (
      <CheckboxRadioBase
        type="checkbox"
        ref={ref}
        partials={{
          Root: StyledCheckbox,
          Checkmark: StyledCheckmark,
          CheckmarkWrapper: CheckboxContainer,
        }}
        {...props}
      ></CheckboxRadioBase>
    );
  }
);

Checkbox.displayName = "Checkbox";
