import React from "react";
import { Input } from "../../styles";

const InputComponent = ({ onChange, ...props }) => {
  return <Input onChange={onChange} />;
};

export default InputComponent;
