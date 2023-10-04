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
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <span>Good: {good}</span>
        <span>Neutral: {neutral}</span>
        <span>Bad: {bad}</span>
        <span>Total: {total}</span>
        <span>Positive feedback: {total === 0 ? '' : percent}%</span>
      </div>
      <div style={{ display: 'block', marginBottom: '20px' }}>
        <button type="button" onClick={handlerOnClickGood}>
          Good
        </button>
        <button type="button" onClick={handlerOnClickNeutral}>
          Neutral
        </button>
        <button type="button" onClick={handlerOnClickBad}>
          Bad
        </button>
      </div>
    </div>
  );
};
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       <Statistics
//       // good={1}
//       // neutral={1}
//       // bad={1}
//       // total={3}
//       // positivePercentage={2}
//       />
//     </div>
//   );
// };
