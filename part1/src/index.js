import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import useState from 'react';

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  const handleLeftClick = () => {
    setClicks({
      ...clicks,
      left: clicks.left + 1,
    });
  };

  const handleRightClick = () => {
    setClicks({
      ...clicks,
      right: clicks.right + 1,
    });
  };

  return (
    <div>
      <div>
        {clicks.left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {clicks.right}
      </div>
    </div>
  );
};

const Display = ({ counter }) => {
  return <div>{counter}</div>;
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};
ReactDOM.render(<App />, document.getElementById('root'));
