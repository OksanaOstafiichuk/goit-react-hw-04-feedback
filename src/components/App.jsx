import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackClick = evt => {
    const currentBtn = evt.target.textContent.toLowerCase();

    this.setState(prevState => {
      return {
        [currentBtn]: prevState[currentBtn] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const feedback = Object.values(this.state);
    const total = feedback.reduce((acc, el) => acc + el);

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFn = this.countTotalFeedback();
    const percentage = Math.round((good / totalFn) * 100);
    return percentage;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.handleFeedbackClick}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {good !== 0 || neutral !== 0 || bad !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}
