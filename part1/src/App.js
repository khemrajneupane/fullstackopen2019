import React, { useState } from "react";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
/** EX- 2.6: The Phonebook Step1 */
/*const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addName = event => {
    event.preventDefault();
    const newObject = {
      name: newName
    };
    console.log(persons);
    setPersons(persons.concat(newObject));
  };

  const handleNameChange = event => {
    setNewName(event.target.value);
  };
  const rows = () =>
    persons.map(person => <li key={person.name}>{person.name}</li>);
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{rows()}</ul>
    </div>
  );
};

export default App;*/
/************************************************************ */
/** EX- 2.7: The Phonebook Step2 */
/*const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addName = event => {
    event.preventDefault();
    const newObject = {
      name: newName
    };
    persons.map(a =>
      a.name.indexOf(newName) > -1
        ? alert(
            `${newName} is already added to phonebook ${setPersons(persons)}`
          )
        : setPersons(persons.concat(newObject))
    );
  };

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const rows = () =>
    persons.map(person => <li key={person.name}>{person.name}</li>);

   
    for (var i = 0; i < persons.length - 1; i++) {
    if (persons[i].name.indexOf(newName) > -1) {
      alert(`${newName} is already added to phonebook`);
    }
  }
  console.log(persons);
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{rows()}</ul>
    </div>
  );
};

export default App;
*/
/******************************************************************************************* */

/** EX- 2.8: The Phonebook Step3 with one more input field for phone numbers*/
/*const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number: 0 }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState(0);

  const addName = event => {
    event.preventDefault();
    const newObject = {
      name: newName,
      number: newNumber
    };
    persons.map(a =>
      a.name.indexOf(newName) > -1 // if the persons array with names contain newly typed newName input already
        ? (alert(
            //then alert and setPersons array as it is, without adding repeated input.
            `${newName} is already added to phonebook`
          ),
          setPersons(persons))
        : setPersons(persons.concat(newObject))
    );
  };

  const handleNameChange = event => {
    setNewName(event.target.value);
  };
  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const rows = () =>
    persons.map(person => (
      <li key={person.name}>
        {person.name} {person.number}
      </li>
    ));

  console.log(persons);
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{rows()}</ul>
    </div>
  );
};

export default App;
*/
/******************************************************************************************* */
/**2.9*: The Phonebook Step4 */
/*const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState(0);
  const [typeSearch, setTypeSearch] = useState("");
  const [foundPerson, setFoundPersons] = useState([]);

  const addName = event => {
    event.preventDefault();
    const newObject = {
      name: newName,
      number: newNumber
    };
    persons.map(a =>
      a.name.indexOf(newName) > -1 // if the persons array with names contain newly typed newName input already
        ? (alert(
            //then alert and setPersons array as it is, without adding repeated input.
            `${newName} is already added to phonebook`
          ),
          setPersons(persons))
        : setPersons(persons.concat(newObject))
    );
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

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with:{" "}
      <input value={typeSearch} onChange={handlePersonsSearch} />
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{rows()}</ul>
    </div>
  );
};

export default App;
*/

/*********************************************************************************************** */

/** Ex- 2.10: The Phonebook Step5***/
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState(0);
  const [typeSearch, setTypeSearch] = useState("");
  const [foundPerson, setFoundPersons] = useState([]);

  const addName = event => {
    event.preventDefault();
    const newObject = {
      name: newName,
      number: newNumber
    };
    persons.map(a =>
      a.name.indexOf(newName) > -1 // if the persons array with names contain newly typed newName input already
        ? (alert(
            //then alert and setPersons array as it is, without adding repeated input.
            `${newName} is already added to phonebook`
          ),
          setPersons(persons))
        : setPersons(persons.concat(newObject))
    );
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

  return (
    <div>
      <h2>Phonebook</h2>
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
      />
    </div>
  );
};

export default App;
