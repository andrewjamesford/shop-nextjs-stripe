import React from "react";
import Head from "next/head";

// Add the following imports
import { Header } from "./header";
import { Footer } from "./footer";

import styles from "../styles/layout.module.css";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Add the header */}
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      {/* Add the footer */}
      <Footer />
    </>
  );
};
