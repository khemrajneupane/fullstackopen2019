/*****************Exercise anecdote completed from part 1 */

import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
const App = props => {
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

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
