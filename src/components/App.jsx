import Statistics from './Statistics.jsx';

export const App = () => {
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
      <Statistics
        good={1}
        neutral={1}
        bad={1}
        total={3}
        positivePercentage={2}
      ></Statistics>
    </div>
  );
};
