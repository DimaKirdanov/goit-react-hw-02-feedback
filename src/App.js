import { Component } from "react";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (event) => {
    const value = event.target.value;
    this.setState((prevState) => ({
      [value]: prevState[value] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.keys(this.state).reduce(
      (acc, item) => acc + this.state[item],
      0
    );
  };
  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback()) {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }
    return 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrement}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      </>
    );
  }
}

export default App;
