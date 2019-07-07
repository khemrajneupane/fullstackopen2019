import React from "react";

const Persons = ({ persons, foundPerson, typeSearch }) => {
  const rows = () =>
    typeSearch === ""
      ? persons.map(person => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))
      : foundPerson.map(person => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ));
  return <ul>{rows()}</ul>;
};
export default Persons;
