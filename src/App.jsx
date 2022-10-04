import { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

import { options } from 'components/FeedbackOptions/options';

export const App = () => {
  const [rating, setRating] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = name => {
    setRating(prevState => {
      return { ...prevState, [name]: prevState[name] + 1 };
    });
  };

  const countPositiveFeedbackPercentage = () => {
    return Number((rating.good / total) * 100).toFixed(1);
  };

  const { good, neutral, bad } = rating;
  const total = good + neutral + bad;

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={options} />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
