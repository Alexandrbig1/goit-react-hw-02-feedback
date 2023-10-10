import Statistics from './Statistics.jsx';
import FeedbackOptions from './FeedbackOptions.jsx';

import React, { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function onClickButtons(e) {
    if (e === 'Good') {
      setGood(e => e + 1);
    }
    if (e === 'Neutral') {
      setNeutral(e => e + 1);
    }
    if (e === 'Bad') {
      setBad(e => e + 1);
    }
  }

  const total = good + bad + neutral;
  const percent = Math.floor((good / total) * 100);

  return (
    <div className="container">
      <div className="wrapper">
        <FeedbackOptions onClickButtons={onClickButtons} />
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={total}
          percent={percent}
        />
      </div>
    </div>
  );
};
