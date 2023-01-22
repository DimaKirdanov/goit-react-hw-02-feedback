import PropTypes from 'prop-types';
import styles from '../Notification/Notification.module.css';
export default function Notification({ message }) {
  return <h2 className={styles.default}>{message}</h2>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
