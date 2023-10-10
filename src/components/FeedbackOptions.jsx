function FeedbackOptions({ onClickButtons }) {
  return (
    <div className="btn-wrapper">
      <button
        className="btn btn-good"
        type="button"
        onClick={e => onClickButtons(e.target.textContent)}
      >
        Good
      </button>
      <button
        className="btn btn-neutral"
        type="button"
        onClick={e => onClickButtons(e.target.textContent)}
      >
        Neutral
      </button>
      <button
        className="btn btn-bad"
        type="button"
        onClick={e => onClickButtons(e.target.textContent)}
      >
        Bad
      </button>
    </div>
  );
}

export default FeedbackOptions;
