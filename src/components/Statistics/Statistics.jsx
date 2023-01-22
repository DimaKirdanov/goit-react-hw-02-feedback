import PropTypes from 'prop-types';
import Notification from '../Notification';
import styles from '../Statistics/Statistics.module.css';
export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      {total > 0 ? (
        <>
          <span className={styles.nameGood}>Good: {good}</span>
          <span className={styles.nameNeutral}>Neutral: {neutral}</span>
          <span className={styles.nameBad}>Bad: {bad}</span>
          <span className={styles.name}>Total: {total}</span>
          <span className={styles.namePositive}>
            PositivePercentage: {positivePercentage}%
          </span>
        </>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
