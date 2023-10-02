const Statistics = props => {
  return (
    <div>
      <div style={{ display: 'block', marginBottom: '20px' }}>
        <button type="button">Good</button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <span>Good: {props.good}</span>
        <span>Neutral: {props.neutral}</span>
        <span>Bad: {props.bad}</span>
        <span>Total: {props.total}</span>
        <span>Positive feedback: {props.positivePercentage}%</span>
      </div>
    </div>
  );
};

export default Statistics;
