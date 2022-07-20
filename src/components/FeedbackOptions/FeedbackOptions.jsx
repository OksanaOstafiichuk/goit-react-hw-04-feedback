import shortid from 'shortid';
import PropTypes from 'prop-types';
import { Feedback, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Feedback>
      {options.map(option => {
        return (
          <Button
            key={shortid.generate()}
            type="button"
            onClick={onLeaveFeedback}
          >
            {option}
          </Button>
        );
      })}
    </Feedback>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
