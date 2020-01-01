import React from 'react';
import { addVote } from '../reducers/anecdoteReducer';


const AnecdoteList =(props)=>{
    const anecdotes = props.store.getState()

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
          <button onClick={() => props.store.dispatch(addVote(anecdote.id))}>vote</button>
        </div>
      </div>
    )}
    </div>
    )
}
export default AnecdoteList