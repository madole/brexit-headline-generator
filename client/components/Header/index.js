import React from 'react';
import styles from './style.css';
import headerImage from '../../images/Brexitheader.png';
const Header = () => (
  <header className={styles.header}>
    <img className={styles.image} src={headerImage} alt="Brexit Headline Generator" />
  </header>
);

export default Header;
