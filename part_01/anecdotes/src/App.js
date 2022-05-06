import { useState } from 'react'

const Button = ({handleClicks, text}) => <button onClick={handleClicks}>{text}</button>
const getRandomInt = (max) => Math.floor(Math.random() * max)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(getRandomInt(anecdotes.length))
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const [mostVoted, setMostVoted] = useState(0)
  console.log('array with points: ', points)
 
  const newAnecdote = () => {
    let index = getRandomInt(anecdotes.length)
    console.log('The index of the new anecdote is: ',index)
    setSelected(index)
  }

  const vote = () => {
    console.log('voted on: ', selected)
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    let index = points.indexOf(Math.max(...points))
    setMostVoted(index)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <Button handleClicks={() => vote()} text='vote' />
      <Button handleClicks={() => newAnecdote()} text='next anecdote' />
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVoted]}</p>
      <p>has {points[mostVoted]} votes</p>
    </div>
  );
}

export default App;
