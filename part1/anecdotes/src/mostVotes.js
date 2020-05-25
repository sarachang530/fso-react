import React from 'react';


const MostVotes = ({ votes, anecdotes }) => {
  const max = Math.max(...votes)
  const maxIndex = votes.indexOf(max);

  return (
    <div>
      <h1>anecdote with most votes</h1>
        {max > 0
          ? <p>{anecdotes[maxIndex]} has {votes[maxIndex]}</p>
          : <p>No anecdote has been voted on yet.</p>
        }
    </div>
  )
}

export default MostVotes;