import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <div>
      <Statistic value={good} text="good" />
      <Statistic value={neutral} text="neutral" />
      <Statistic value={bad} text="bad" />
      <Statistic value={good + bad + neutral} text="all" />
      <Statistic value={(good - bad) / (good + bad + neutral)} text="average" />
      <Statistic
        value={(good / (good + bad + neutral)) * 100 + "%"}
        text="positive"
      />
    </div>
  );
};

const Statistic = props => {
  return (
    <table
      style={{
        width: "20%"
      }}
    >
      <tbody>
        <tr>
          <td>{props.text}</td>
          <td style={{ textAlign: "right" }}>{props.value}</td>
        </tr>
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
  };
  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button onClick={handleGoodClick} text="good" />
        <Button onClick={handleNeutralClick} text="neutral" />
        <Button onClick={handleBadClick} text="bad" />
        <h1>statistics</h1>
        <Statistics
          text="good"
          good={good}
          text="neutral"
          neutral={neutral}
          text="bad"
          bad={bad}
        />
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
