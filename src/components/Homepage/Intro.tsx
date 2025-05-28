import React from "react";
import { FC } from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";

const Intro: FC = () => {
  return (
    <>
      <div className={styles.background} />
      <div className={styles.introWrapper}>
        <Head bodyAttributes={{ "data-homepage": true }}>{null}</Head>
        <h1 className={styles.IntroHeading}>Welcome to Midnight Docs</h1>
        <h3 className={styles.IntroStandfirst}>
          Here you’ll learn all about Midnight, a new data protection blockchain. Explore Midnight’s technology stack, features, use cases, and differentiators in the blockchain and smart contract landscape.
        </h3>
        <h4 className={styles.IntroStandfirstLight}>
          Midnight is available on Testnet. As it evolves, so will the developer documentation – check back for updates.
        </h4>
        <div className={styles.linkContainer}>
        <Link to="/quickstart" className={styles.link4}>
            Quick start
          </Link>
          <Link
            to="/learn/introduction/what-is-midnight/"
            className={styles.link4}
          >
            Learn
          </Link>
          <Link to="/develop" className={styles.link4}>
            Build
          </Link>
          <Link to="/validate/run-a-validator" className={styles.link4}>
            Validate
          </Link>
        </div>
      </div>
    </>
  );
};

export default Intro;
