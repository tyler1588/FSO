import { useState } from 'react'

const App = () => {
  const anecdoteArray = [
    {
      "text": 'If it hurts, do it more often.', 
      "votes": 0
    },
    {
      "text": 'Adding manpower to a late software project makes it later!',
      "votes": 0
    },
    {
      "text": 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      "votes": 0
    },
    {
      "text": 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      "votes": 0
    },
    {
      "text": 'Premature optimization is the root of all evil.',
      "votes": 0
    },
    {
      "text": 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      "votes": 0
    },
    {
      "text": 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      "votes": 0
    },
    {
      "text": 'The only way to go fast, is to go well.',
      "votes": 0
    },
  ]
   
  const [anecdotes, setAnecdotes] = useState(anecdoteArray)
  const rand = () => Math.floor(Math.random() * anecdotes.length)
  const [selected, setSelected] = useState(rand())
  const getMax = () => anecdotes.reduce((prev, curr) => (prev.votes > curr.votes) ? prev : curr)
  const nextAnecdote = () => setSelected(rand())
  const addVote = () => {
    setAnecdotes(anecdotes.map((anecdote, index) => 
      index === selected ? {...anecdote, votes: anecdote.votes + 1} : anecdote
    ))
  }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected].text}</p>
      <p>votes {anecdotes[selected].votes}</p>
      <button onClick={() => nextAnecdote()}>next anecdote</button>
      <button onClick={() => addVote()}>vote</button>
      <h1>Anecdote with most votes</h1>
      <p>{getMax().text}</p>
    </div>
  )
}

export default App