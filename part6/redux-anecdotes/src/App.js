import React from 'react';
import { addVote, newAnecdotes } from './reducers/anecdoteReducer';

const App = (props) => {
  const anecdotes = props.store.getState()
  //console.log(anecdotes)

  const addVoteLocal = (id) => props.store.dispatch(addVote(id))

  const newAnecdotesLocal = (event) => {
    event.preventDefault();
    props.store.dispatch(newAnecdotes(event.target.contents.value))
  }
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => addVoteLocal(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={newAnecdotesLocal}>
        <div><input name="contents" /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App