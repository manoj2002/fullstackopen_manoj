import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });
  const handlevoteClick = () => {
    setVotes({
      ...votes,
      [selected]: votes[selected] + 1,
    });
  };
  

  const handleClick = () => {
    setSelected(Math.floor((Math.random() * anecdotes.length)))
    console.log(selected)
  }
  return (
    <div>
      <Content anecdote={anecdotes[selected]} vote={votes[selected]} />
      <button onClick={handleClick}>NEXT ANCEDOTE</button>
      <button onClick={handlevoteClick}>VOTE</button>
    </div>
  )
}
const Content = (prop) =>{
  console.log(prop.anecdote)
  return(
    <div>
        <p>{prop.anecdote}</p>
        <p>has {prop.vote} votes</p>
    </div>
  
  )
}
export default App;
