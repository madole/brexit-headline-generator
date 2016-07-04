import React, { PropTypes } from 'react';
import styles from './style.css';

const Headline = ({ headline }) => (
  <div className={styles.headline}>{headline}</div>
);

Headline.propTypes = {
    headline: PropTypes.string.required
};

export default Headline;
