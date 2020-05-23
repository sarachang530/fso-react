import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import useState from 'react';

const App = () => {
  const [all, setAll] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    average: 0,
    positive: 0
  });

  const handleGood = () => {
    setAll({
      ...all,
      good: all.good + 1,
      total: all.total + 1,
      average: all.total / 3,
      positive: (all.good / all.total) * 100
    })
  };
  const handleNeutral = () => {
    setAll({...all,
    neutral: all.neutral + 1,
    total: all.total + 1,
    average: all.total / 3
    })
  };
  const handleBad = () => {
    setAll({
    ...all,
    bad: all.bad + 1,
    total: all.total + 1,
    average: all.total / 3
    })
  };


  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <p>Statistics</p>
      <Statistics good={all.good} neutral={all.neutral} bad={all.bad} total={all.total} average={all.average} positive={all.positive} />
      {/* <p>good {all.good}</p>
      <p>neutral {all.neutral}</p>
      <p>bad {all.bad}</p>
      <p>all {all.total}</p>
      <p>plus {all.positive}%</p> */}
    </div>
  );
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;


const Statistics = ({ good, bad, neutral, total, average, positive }) => {
  const all = good + bad + neutral
  if(all === 0){
    return (
      <div>
        No feedback given
        </div>
    )
  }
  return (
    <div>
      <Stat text='good' value={good} />

      <Stat text='neutral' value={neutral} />

      <Stat text='bad' value={bad} />
      <Stat text='total' value={total} />
      <Stat text='average' value={average} />
      <Stat text='positive' value={positive} />
    </div>
  )
}

const Stat = ({ text, value }) =>{
  return (
    <div>{text} {value}</div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));
