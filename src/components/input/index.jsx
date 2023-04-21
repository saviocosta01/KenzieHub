import { DivInput } from "./style";
import { forwardRef } from "react";

export const Input = forwardRef(
  ({ label, id, type, placeholder, error, ...rest }, ref) => {
    return (
      <DivInput>
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          ref={ref}
          {...rest}
          placeholder={placeholder}
        />
        {error ? <p>{error}</p> : null}
      </DivInput>
    );
  }
);
