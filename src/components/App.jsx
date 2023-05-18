import React, { useState } from 'react';
import css from './App.module.css';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let sum = 0;
  const values = { good, neutral, bad };

  const countTotalFeedback = data => {
    return (sum = Object.values(data).reduce((acc, number) => acc + number));
  };

  const countPositiveFeedbackPercentage = data => {
    return data.good !== 0 ? Math.round((data.good / sum) * 100) : 0;
  };

  const onLeaveFeedback = e => {
    switch (e.target.name) {
      case 'good': setGood(prev => (prev += 1)); break;
      case 'bad': setBad(prev => (prev += 1)); break;
      case 'neutral': setNeutral(prev => (prev += 1)); break;
      default: ; return;
    }
  };

  return (
    <div className={css.app}>
      <Section title="Please Leave your feedback">
        <FeedbackOptions options={values} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      {Object.values(values).some(values => values !== 0) ? (
        <Section title="Statistics:" children>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback(values)}
            positivePercentage={countPositiveFeedbackPercentage(values)}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}
