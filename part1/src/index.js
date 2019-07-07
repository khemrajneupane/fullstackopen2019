import React, { useState } from "react";
import ReactDOM from "react-dom";
import Course from "./Course";
import App from "./App";

//assignment 1.7

/*const Button = ({ onClick, text }) => { 
    return (
      <button onClick={onClick}>
        {text}
      </button>
    )
  }


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    
    setGood(good + 1)
    //setAverage((good-bad)/count)
  }
  const handleNeutralClick = () => {
    
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    
    setBad(bad + 1)
    //setAverage((good-bad)/count)

  }
  return (
    <div>
            <div>
       <h1>give feedback</h1>
        <Button onClick={handleGoodClick} text='good' />
        <Button onClick={handleNeutralClick} text='neutral' />
        <Button onClick={handleBadClick} text='bad' />
       <h1>statistics</h1>
        good {good} <br />
        neutral {neutral} <br />
        bad {bad} <br />
        
        all {good+bad+neutral} <br />
        average {(good-bad)/(good+bad+neutral)} <br />
        positive {good/(good+bad+neutral)*100}%
        
      </div>
    </div>
  )
}
*/
//make 1.9,1.10 exercises out of 1.11.
//exercise 1.11 below
/*const Button = ({ onClick, text }) => { 
    return (
      <button onClick={onClick}>
        {text}
      </button>
    )
  }
  const Statistics =({good,neutral,bad})=>{
      if(good===0 && neutral === 0 && bad === 0){
          return(<div>No feedback given</div>)
      }
     
          return(<div>
             
              <Statistic value={good} text='good'/>
                <Statistic value={neutral} text='neutral'/>
                <Statistic value={bad} text='bad'/>
                <Statistic value={good+bad+neutral} text='all'/>
                <Statistic value={(good-bad)/(good+bad+neutral)} text='average'/>
                <Statistic value={good/(good+bad+neutral)*100+'%'} text='positive'/>
                
          </div>)
      }
 
  const Statistic = (props) => {
    
    return (
        <table>
            <tbody>
                <tr><th>{props.text} {props.value}</th></tr>
            </tbody>
        </table>
        )
  }

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    
    setGood(good + 1)
    
  }
  const handleNeutralClick = () => {
    
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    
    setBad(bad + 1)
    

  }
  return (
    <div>
            <div>
       <h1>give feedback</h1>
        <Button onClick={handleGoodClick} text='good' />
        <Button onClick={handleNeutralClick} text='neutral' />
        <Button onClick={handleBadClick} text='bad' />
       <h1>statistics</h1>
    <Statistics text='good' good={good} text='neutral' neutral={neutral} text='bad' bad={bad}/>
       
        
      </div>
    </div>
  )
}
ReactDOM.render(<App />, 
  document.getElementById('root')
)
*/
//exercise 1.12anecdotes step1
/*const App = (props) => {
  const [selected, setSelected] = useState(0)
  const handleClick = ()=>{
    setSelected(Math.floor(Math.random()*props.anecdotes.length))
    //console.log(Math.floor(Math.random()*props.anecdotes.length))

  }
//console.log(selected)
  return (
    <div>
     
      {props.anecdotes[selected]} <br />
      <Button onClick={handleClick} text='next anecdote' />

    </div>
  )
}
const Button = ({ onClick, text }) => { 
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes}/>, 
  document.getElementById('root')
)
*/

//1.13*
/*const App = props => {
  const [selected, setSelected] = useState(0);
  const emptyArr = new Array(props.anecdotes.length).fill(0);
  const [point, setPoint] = useState(emptyArr);

  const handleClick = () => {
    setSelected(Math.floor(Math.random() * props.anecdotes.length));
  };

  const handleVote = () => {
    const val = [...point];
    val[selected] += 1;
    setPoint(val);
  };

  return (
    <div>
      {props.anecdotes[selected]} <br />
      has {point[selected]} votes <br />
      <Button onClick={handleVote} text="vote" />
      <Button onClick={handleClick} text="next anecdote" />
    </div>
  );
};
const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
*/
//ex 1.14*
/*const App = props => {
  const [selected, setSelected] = useState(0);
  const emptyArr = new Array(props.anecdotes.length).fill(0);
  const [anecdote, setAnecdote] = useState("");
  const [point, setPoint] = useState(emptyArr);

  const handleClick = () => {
    setSelected(Math.floor(Math.random() * props.anecdotes.length));
  };

  const handleVote = () => {
    const val = [...point];
    val[selected] += 1;
    setPoint(val);
    for (var i = 0; i < point.length - 1; i++) {
      if (point[i] === Math.max(...point)) {
        setAnecdote(props.anecdotes[i]);
      }
    }
  };

  return (
    <div>
      {props.anecdotes[selected]} <br />
      has {point[selected]} votes <br />
      <Button onClick={handleVote} text="vote" />
      <Button onClick={handleClick} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      {anecdote} <br />
      has {Math.max(...point)} votes
    </div>
  );
};
const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
*/

//  2.1 course contents step6 && 2.2 course contents step7 && Ex 2.3* Course Contents step8

/*const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3
      }
    ]
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
*/

/** Ex 2.4 Course Contents steps9 */
/*const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2
        }
      ]
    }
  ];

  return (
    <div>
      <Course courses={courses} />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
*/
/**PRACTICE******************** */
/** below is just learning practice*/
/*const Note = ({ note }) => {
  return <li>{note.content}</li>;
};

const notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true
  }
];
const App = props => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  //const { notes } = props
  console.log(notes);
  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true);

  const rows = () =>
    notes.map(note => <Note key={note.id} note={note} />);

  const addNote = event => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1
    };

    setNotes(notes.concat(noteObject));
  };
  const handleNoteChange = event => {
    //console.log(event.target.value);
    setNewNote(event.target.value);
  };
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>{rows()}</ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

ReactDOM.render(<App notes={notes} />, document.getElementById("root"));
*/
ReactDOM.render(<App />, document.getElementById("root"));
