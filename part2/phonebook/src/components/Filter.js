import React from "react";
import { Input } from "./PersonForm";

const Filter = ({ value, handlePersonsSearch }) => {
  return (
    <Input
      text="filter shown with"
      inputValue={value}
      handler={handlePersonsSearch}
    />
  );
};
export default Filter;
