// import Statistics from './Statistics.jsx';

import React, { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // const [states, setState] = useState(0);
  // const { good, neutral, bad } = states;

  function handlerOnClickGood() {
    setGood(e => e + 1);
  }
  function handlerOnClickNeutral() {
    setNeutral(e => e + 1);
  }
  function handlerOnClickBad() {
    setBad(e => e + 1);
  }

  const total = good + bad + neutral;

  const percent = Math.floor((good / total) * 100);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="btn-wrapper">
          <button
            className="btn btn-good"
            type="button"
            onClick={handlerOnClickGood}
          >
            Good
          </button>
          <button
            className="btn btn-neutral"
            type="button"
            onClick={handlerOnClickNeutral}
          >
            Neutral
          </button>
          <button
            className="btn btn-bad"
            type="button"
            onClick={handlerOnClickBad}
          >
            Bad
          </button>
        </div>
        <p className="text-wrapper">
          <span>Good: {good}</span>
          <span>Neutral: {neutral}</span>
          <span>Bad: {bad}</span>
          <span>Total: {total}</span>
          <span>
            {total === 0 ? (
              <span>Positive feedback: </span>
            ) : (
              <span>Positive feedback: {percent}%</span>
            )}
          </span>
        </p>
      </div>
    </div>
  );
};
