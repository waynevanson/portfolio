import React from "react";
import styled from "styled-components";

export const InputText = styled.input.attrs({ type: "text" })`
  border: 1px solid grey;
  border-radius: 0.25rem;
  padding: 0.25rem;
  font-size: 1.25rem;
  max-width: 100%;
`;

const InnerCheckbox = styled.input.attrs({ type: "checkbox" })``;

export const Checkbox = React.forwardRef<
  HTMLInputElement,
  Omit<JSX.IntrinsicElements["input"], "type" | "ref">
>(({ style, children, className, ...rest }, ref) => {
  return (
    <label
      tabIndex={0}
      role="checkbox"
      aria-checked={rest.checked}
      htmlFor={rest.name}
      style={{ display: "inline-block", marginBlock: "10px 10px", ...style }}
      className={className}
    >
      {children}
      <InnerCheckbox
        ref={ref}
        className={className}
        {...rest}
        style={{
          display: React.Children.count(children) === 0 ? "unset" : "none",
          ...style,
        }}
      />
    </label>
  );
});

export const Button = styled.button`
  border: 0;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
  &:hover,
  &:focus {
    filter: brightness(1.5);
  }
`;

export const ButtonIcon = styled(Button)`
  padding: 0;
  background-color: unset;
`;
