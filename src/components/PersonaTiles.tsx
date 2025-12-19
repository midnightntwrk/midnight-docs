import React from "react";
import Link from "@docusaurus/Link";
import styles from "@site/src/css/persona-tiles.module.css";

type Tile = { title: string; body: string; to: string; cta: string; icon?: string };

const tiles: Tile[] = [
  {
    title: "New to blockchain",
    body: "Learn core ideas related to selective disclosure, ZK proofs, commitments, and how Midnight is different.",
    to: "/academy",
    cta: "Start learning",
  },
  {
    title: "Developer",
    body: "Install tools, scaffold an app, write a contract, and send a private transaction.",
    to: "/getting-started",
    cta: "Start building",
  },
  {
    title: "Node operators and SPOs",
    body: "Run nodes, monitor health, validate blocks, and follow ops best practices.",
    to: "/validate/run-a-validator",
    cta: "Operate nodes",
  },
  {
    title: "Research and compliance",
    body: "Explore the runtime, proving system, transaction semantics, and audit paths.",
    to: "/develop/how-midnight-works",
    cta: "View architecture",
  },
];

export default function PersonaTiles() {
  return (
    <div className={styles.grid}>
      {tiles.map((t) => (
        <Link key={t.title} to={t.to} className={styles.card}>
          <div className={styles.badge} aria-hidden="true">✦</div>
          <h3 className={styles.title}>{t.title}</h3>
          <p className={styles.body}>{t.body}</p>
          <div className={styles.footer}>
            <span className={styles.cta}>{t.cta}</span>
            <span className={styles.arrow} aria-hidden="true">→</span>
          </div>
        </Link>
      ))}
    </div>
  );
}