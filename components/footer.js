import React from "react";
import styles from "../styles/footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerCont}>
        <nav className={styles.footerNav}>
          <ul>
            <li>Find a Store</li>
            <li>Sign up for Email</li>
            <li>Become a Member</li>
            <li>Feedback</li>
          </ul>
        </nav>
        <div className={styles.copyright}>&copy; 2022 Shoe Shop</div>
      </div>
    </footer>
  );
};
