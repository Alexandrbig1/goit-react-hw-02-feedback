function Statistics({ good, bad, neutral, total, percent }) {
  return (
    <div className="text-wrapper">
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
    </div>
  );
}

export default Statistics;
