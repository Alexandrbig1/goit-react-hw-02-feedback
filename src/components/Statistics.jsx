import FeedbackOptions from './FeedbackOptions';
import React, { Component } from 'react';

class Statistics extends Component {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  // countTotalFeedback = () => {
  //   this.setState(prevState => ({
  //   }));
  // };
  // countPositiveFeedbackPercentage = () => {};
  render() {
    return (
      <div>
        {/* <FeedbackOptions
          // onCountTotalFeedback={this.countTotalFeedback}
          options={this.state}
          onLeaveFeedback={1}
        /> */}

        {/* <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <span>Good: {this.state.good}</span>
          <span>Neutral: {this.state.neutral}</span>
          <span>Bad: {this.state.bad}</span>
          <span>Total: 0</span>
          <span>Positive feedback: {this.state.positivePercentage}%</span>
        </div> */}
      </div>
    );
  }
}

export default Statistics;
