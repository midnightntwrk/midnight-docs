import React from "react";
import clsx from "clsx";
import type { Props } from "@theme/Footer/Layout";
import styles from "./styles.module.css";

export default function FooterLayout({
  style,
  links,
  logo,
  copyright
}: Props): JSX.Element {
  return (
    <footer
      className={clsx("footer", {
        "footer--dark": style === "dark"
      })}
    >
      <div className="container container-fluid">
        <div className={styles.footer__inner}>
          <div className={styles["footer__logo-container"]}>
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
          </div>
          <div className={styles["footer__links-container"]}>{links}</div>
        </div>
      </div>
    </footer>
  );
}
