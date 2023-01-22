import ucFirst from '../ucFirst.js';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(item => (
        <button
          type="button"
          key={item}
          onClick={onLeaveFeedback}
          value={item}
          className={styles.button}
        >
          {ucFirst(item)}
        </button>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
