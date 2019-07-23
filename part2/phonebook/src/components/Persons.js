import React from "react";

const Persons = ({ persons, foundPerson, typeSearch, deleteList }) => {
  const rows = () =>
    typeSearch === ""
      ? persons.map(person => (
          <li key={person.id}>
            {person.name} {person.number}
            <button onClick={() => deleteList(person)}>delete</button>
          </li>
        ))
      : foundPerson.map(persons => (
          <li key={persons.id}>
            {persons.name} {persons.number}
          </li>
        ));
  return <ul>{rows()}</ul>;
};
export default Persons;
