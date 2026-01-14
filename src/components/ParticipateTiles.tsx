import React from "react";
import Link from "@docusaurus/Link";
import styles from "@site/src/css/persona-tiles.module.css";

type Tile = { title: string; body: string; to: string; cta: string };

const ITEMS: Tile[] = [
  {
    title: "Discord",
    body: "Talk to the team, get support, and join community calls.",
    to: "https://discord.com/invite/midnightnetwork",
    cta: "Join",
  },
  {
    title: "YouTube",
    body: "Watch walkthroughs, deep dives, and engineering talks.",
    to: "https://www.youtube.com/@midnight.network",
    cta: "Watch",
  },
  {
    title: "Hackathons",
    body: "Build, learn, win rewards, and launch new ideas.",
    to: "https://midnight.network/hackathon",
    cta: "Explore",
  },
  {
    title: "Nightpaper",
    body: "Read the architectural overview and core thesis.",
    to: "https://midnight.network/whitepaper",
    cta: "Read",
  },
  {
    title: "Blog",
    body: "Engineering updates, ecosystem news, and release notes.",
    to: "https://midnight.network/blog",
    cta: "Browse",
  },
];

export default function ParticipateTiles() {
  return (
    <div className={styles.participateGrid}>
      {ITEMS.map((t) => (
        <Link key={t.title} to={t.to} className={styles.participateCard}>
          <h4 className={styles.participateTitle}>{t.title}</h4>
          <p className={styles.participateDesc}>{t.body}</p>
        </Link>
      ))}
    </div>
  );
}