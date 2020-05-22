import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import useState from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => {
    setCounter(counter + 1);
    console.log('clicked');
  };

  const decreasedByOne = () => {
  setCounter(counter - 1)
}
  const setToZero = () => {
    setCounter(0);
  };

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text='plus' />
      <Button handleClick={decreasedByOne} text='minus' />
      <Button handleClick={setToZero} text='zero' />
    </div>
  );
};

const Display = ({ counter }) => {
  return <div>{counter}</div>;
};

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}
ReactDOM.render(<App />, document.getElementById('root'));
