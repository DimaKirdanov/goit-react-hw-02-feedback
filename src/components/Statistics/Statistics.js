import PropTypes from "prop-types";
import Notification from "../Notification";
import s from "../Statistics/Statistics.module.css";
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
          <span className={s.nameGood}>Good: {good}</span>
          <span className={s.nameNeutral}>Neutral: {neutral}</span>
          <span className={s.nameBad}>Bad: {bad}</span>
          <span className={s.name}>Total: {total}</span>
          <span className={s.namePositive}>
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
