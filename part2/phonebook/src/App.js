import React, { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import personsServices from "./services/Persons";
import "./index.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState(0);
  const [typeSearch, setTypeSearch] = useState("");
  const [foundPerson, setFoundPersons] = useState([]);
  const [message, setMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const setNullMessage = () => {
    setTimeout(() => {
      setMessage(null);
      setErrorMessage(null);
    }, 5000);
  };
  const Notification = ({ message, errorMessage }) => {
    if (message === null || errorMessage != null) {
      return <div className="errorMessage">{errorMessage}</div>;
    } else if (message != null || errorMessage === null) {
      return <div className="message">{message}</div>;
    }
  };

  useEffect(() => {
    personsServices.getAll().then(response => {
      setPersons(response);
    });
  }, []);

  const addName = event => {
    event.preventDefault();
    const newObject = {
      name: newName,
      number: newNumber,
      id: null
    };
    const nameStyle = `${newObject.name
      .charAt(0)
      .toUpperCase()}${newObject.name
      .slice(1, newObject.name.length)
      .toLocaleLowerCase()}`;
    const check = persons.map(a => a.name.indexOf(newObject.name));
    const ifTrue = check.indexOf(0) > -1;

    if (ifTrue && newObject.number.length > 0) {
      const thisPerson = persons.filter(
        person => !person.name.indexOf(newObject.name)
      )[0];
      let r = window.confirm(
        `${
          thisPerson.name
        } is already added to phonebook, replace the old number with a new one?`
      );

      if (r === true) {
        personsServices.update(thisPerson.id, newObject).catch(error => {
          if (error) {
            setErrorMessage(
              ` ${thisPerson.name}'s information does not exist in the server`
            );
            setNullMessage();
            const value = persons.filter(person => person.id !== thisPerson.id);
            setPersons(value);
          }
        });
        const value = persons.filter(person => person.id !== thisPerson.id);
        setPersons(value.concat(newObject));
        setMessage(`Updated ${nameStyle}'s phone number successfully`);
        setNullMessage();
      } else if (r === false) {
        setMessage(`${nameStyle}'s phone number has not been changed`);
        setNullMessage();
        return;
      }
    } else if (ifTrue || newObject.number === "") {
      setPersons(persons);

      setMessage(`${nameStyle}'s phone number has not been supplied`);
      setNullMessage();
    } else if (!ifTrue && newObject.number !== 0) {
      personsServices
        .create(newObject)
        .then(req => setPersons(persons.concat(req)))
        .catch(error => {
          setErrorMessage("some kind of error!!");
          setNullMessage();
        });
      setMessage(`Added ${nameStyle}`);
      setNullMessage();
    } else if (!ifTrue && newObject.number === 0) {
      setPersons(persons);

      setMessage(`${nameStyle}'s phone number is missing`);
      setNullMessage();
    }
  };

  const handleNameChange = event => {
    setNewName(event.target.value);
  };
  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };
  const handlePersonsSearch = event => {
    //console.log(event.target.value)
    setTypeSearch(event.target.value);
    const personsSearched = persons.filter(person =>
      person.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFoundPersons(personsSearched);
  };
  const deleteList = person => {
    const { id, name } = person;
    let r = window.confirm(`delete ${name} ?`);
    if (r === true) {
      personsServices.deleteList(id).catch(error => {
        setErrorMessage(
          `Information of ${name} has been removed from the server.`
        );
        setNullMessage();
      });
      setPersons(persons.filter(person => person.id !== id));
      setMessage(`${name}'s entry has been erased`);
      setNullMessage();
    } else if (r === false) {
      setMessage(`${name}'s entry has not been erased`);
      setNullMessage();
      return;
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      {message != null || errorMessage != null ? (
        <Notification message={message} errorMessage={errorMessage} />
      ) : null}

      <Filter handlePersonsSearch={handlePersonsSearch} />
      <h2>add a new</h2>
      <PersonForm
        onSubmit={addName}
        nameInputChanged={handleNameChange}
        numberInputChanged={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        foundPerson={foundPerson}
        typeSearch={typeSearch}
        deleteList={deleteList}
      />
    </div>
  );
};

export default App;
