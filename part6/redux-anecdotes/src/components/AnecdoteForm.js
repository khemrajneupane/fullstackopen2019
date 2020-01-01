import React from 'react';
import { newAnecdotes } from '../reducers/anecdoteReducer';

const AnecdoteForm = (props) =>

   <div>
        <h2>create new</h2>
        <form onSubmit={(e)=>{
            e.preventDefault()
            props.store.dispatch(newAnecdotes(e.target.contents.value))}}>
            <div><input name="contents" /></div>
            <button>create</button>
        </form>
    </div>

export default AnecdoteForm 

