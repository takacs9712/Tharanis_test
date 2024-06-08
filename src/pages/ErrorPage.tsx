import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/ErrorPage.module.scss";

const NotFound: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Oops! It looks like you're lost.</p>
      <p className={styles.joke}>
        Why don't you try going back home? There's no place like home.
      </p>
      <Link to="/" className={styles.homeLink}>
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
