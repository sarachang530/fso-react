import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import RandomButton from './randomButton';
import Votebutton from './voteBtn';


const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(0)

  const [points, setPoints] = useState(new Array(anecdotes.length + 1).join('0').split('').map(parseFloat))

  const handleRandom = () => {
    setSelected(Math.floor((Math.random() * (anecdotes.length))))

  }
  const handleVotes = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);



    const mostVotes = Math.max(...copy)
    const mostVotesIndex = copy.indexOf(mostVotes)
    setVotes(mostVotesIndex)
  }

  return (
    <div>
      {anecdotes[selected]}
      has {votes} votes
      <RandomButton text='next anecdote' onClick={handleRandom} />
      <Votebutton text='vote' onClick={handleVotes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)