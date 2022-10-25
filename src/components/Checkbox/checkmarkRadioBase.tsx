import React, {useRef, useState, useEffect} from "react";
import mergeRefs from "react-merge-refs";
import {CHECKBOX_RADIO_VARIANT} from "./utils/types";
import {CheckboxRadioBaseProps, CheckboxRootProps} from "./checkbox.props";
import {CheckboxContainer} from "./checkboxContainer";
import {StyledInnerWrapper} from "./innerWrapper";
import {StyledInput} from "./styledInput";
import {StyledWrapper} from "./wrapper";
import styled from "@emotion/styled/macro";
import {StyledLabel} from "./styledLabel";
import {useExternalId} from "./utils/external";

export const CheckboxRadioBase = React.forwardRef<
  HTMLInputElement,
  CheckboxRadioBaseProps
>(
  (
    {
      className = "",
      id: externalId,
      checked = false,
      defaultChecked,
      isDisabled = false,
      isInvalid,
      label,
      name,
      onChange,
      variant = CHECKBOX_RADIO_VARIANT.DEFAULT,
      value,
      type,
      partials: {Root, Checkmark, CheckmarkWrapper},
      ...rest
    },
    ref
  ) => {
    const id = useExternalId(`${type}-input`, externalId);
    const localRef = useRef<HTMLInputElement>(null);
    const isControlled = defaultChecked === undefined;
    const hasContainer = variant !== CHECKBOX_RADIO_VARIANT.NO_CONTAINER;
    const [isChecked, setIsChecked] = useState<boolean>(
      defaultChecked ?? checked
    );

    // Respect external changes to `defaultChecked` and `checked`
    useEffect(() => {
      setIsChecked(defaultChecked ?? checked);
    }, [defaultChecked, checked]);

    // Handle implicit deselection of radio in collection
    useEffect(() => {
      const handleSelected = (e: Event) => {
        const {
          detail: {ref: emittedRef},
        } = e as CustomEvent;

        const isDifferent = emittedRef !== localRef;
        const isInCollection =
          emittedRef.current.attributes.name.value === name;
        const isRadio = type === "radio";

        if (isDifferent && isInCollection && isRadio) {
          setIsChecked(false);
        }
      };

      document.addEventListener("_mod-uk-ds:radio:selected", handleSelected);

      return () => {
        document.removeEventListener(
          "_mod-uk-ds:radio:selected",
          handleSelected
        );
      };
    }, [type, name]);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target !== localRef.current) {
        localRef.current?.click();
      }
    };

    const handleKeyUp = (_: React.KeyboardEvent) => {
      localRef.current?.focus();
    };

    const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
      setIsChecked(e.currentTarget.checked);

      if (type === "radio") {
        const event = new CustomEvent("_mod-uk-ds:radio:selected", {
          detail: {ref: localRef},
        });

        document.dispatchEvent(event);
      }

      if (onChange) {
        onChange(e);
      }
    };

    return (
      <StyledWrapper>
        <Root
          className={className}
          $isDisabled={isDisabled}
          $hasContainer={hasContainer}
          $isInvalid={isInvalid}
          $isChecked={isChecked}
          onClick={handleClick}
          onKeyUp={handleKeyUp}
          data-testid={type}
        >
          <StyledInnerWrapper $hasContainer={hasContainer}>
            <StyledLabel
              $hasContainer={hasContainer}
              $isDisabled={isDisabled}
              htmlFor={id}
              data-testid={`${type}-label`}
            >
              <CheckboxContainer $hasContainer={hasContainer}>
                <StyledInput
                  defaultChecked={defaultChecked}
                  ref={mergeRefs([localRef, ref])}
                  type={type}
                  name={name}
                  value={value}
                  onChange={handleOnChange}
                  disabled={isDisabled}
                  checked={isControlled ? isChecked : undefined}
                  {...rest}
                />

                <Checkmark
                  $hasContainer={hasContainer}
                  $isDisabled={isDisabled}
                />
              </CheckboxContainer>
            </StyledLabel>
          </StyledInnerWrapper>
        </Root>
      </StyledWrapper>
    );
  }
);

CheckboxRadioBase.displayName = "CheckboxRadioBase";
