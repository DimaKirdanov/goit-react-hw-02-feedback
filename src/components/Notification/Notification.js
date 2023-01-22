import PropTypes from "prop-types";
import s from "../Notification/Notification.module.css";
export default function Notification({ message }) {
  return <h2 className={s.default}>{message}</h2>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
