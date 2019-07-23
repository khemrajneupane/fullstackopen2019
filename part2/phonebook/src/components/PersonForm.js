import React from "react";
export const Input = ({ text, inputValue, handler }) => {
  return (
    <div>
      {text}: <input value={inputValue} onChange={handler} />
    </div>
  );
};
const Button = ({ type, text }) => {
  return <button type={type}>{text}</button>;
};

const PersonForm = ({
  onSubmit,
  nameInputChanged,
  numberInputChanged,
  newName,
  newNumber
}) => {
  return (
    <form onSubmit={onSubmit}>
      <Input text="name" inputValue={newName} handler={nameInputChanged} />
      <Input
        text="number"
        inputValue={newNumber}
        handler={numberInputChanged}
      />
      <Button type="submit" text="add" />
    </form>
  );
};
export default PersonForm;
