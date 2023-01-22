import PropTypes from 'prop-types';
import styles from '../Section/Section.module.css';
export default function Section({ title, children }) {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
