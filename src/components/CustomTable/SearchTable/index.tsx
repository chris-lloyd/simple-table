import React from "react";
import { StyledInput } from "./StyledInput";

const InputComponent = ({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler;
}) => {
  return (
    <StyledInput
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputComponent;
