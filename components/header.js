import React from "react";

import styles from "../styles/header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.mainNav}>
        <div className={styles.logo}></div>
        <div className={styles.iconNav}>
          <nav></nav>
        </div>
      </div>
    </header>
  );
};
