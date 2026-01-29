import React from "react";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import styles from "@site/src/css/persona-tiles.module.css";

// Type assertion to fix TypeScript issue with Docusaurus Link component
const DocLink = Link as any;

export type Tile = { 
  title: string; 
  body: string; 
  to: string; 
  cta: string; 
  icon?: string;
};

interface PersonaTilesProps {
  tiles?: Tile[];
}

const defaultTiles: Tile[] = [
  {
    title: "New to blockchain",
    body: "Learn core ideas related to selective disclosure, ZK proofs, commitments, and how Midnight is different.",
    to: "https://academy.midnight.network/",
    cta: "Start learning",
  },
  {
    title: "Developer",
    body: "Install tools, scaffold an app, write a contract, and send a private transaction.",
    to: "/getting-started",
    cta: "Start building",
  },
  {
    title: "Node operators",
    body: "Run nodes, monitor health, and follow node best practices.",
    to: "/operate/node-intro",
    cta: "Operate nodes",
  },
  {
    title: "Research and compliance",
    body: "Explore the runtime, proving system, transaction semantics, and audit paths.",
    to: "/develop/how-midnight-works",
    cta: "View architecture",
  },
];

function isExternalLink(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://');
}

function getVersionPrefix(pathname: string): string {
  // Check if we're on a versioned path
  // Patterns: /next/... or /0.0.0/... or /1.0.0/...
  const versionMatch = pathname.match(/^\/(next|\d+\.\d+\.\d+)(\/|$)/);
  if (versionMatch) {
    return `/${versionMatch[1]}`;
  }
  return '';
}

export default function PersonaTiles({ tiles = defaultTiles }: PersonaTilesProps) {
  const location = useLocation();
  const versionPrefix = getVersionPrefix(location.pathname);
  
  return (
    <div className={styles.grid}>
      {tiles.map((t) => {
        // Determine the final path
        let finalPath = t.to;
        
        if (!isExternalLink(t.to)) {
          // For internal links, prepend version prefix if we have one
          if (versionPrefix && t.to.startsWith('/')) {
            finalPath = `${versionPrefix}${t.to}`;
          }
        }
        
        return (
          <DocLink 
            key={t.title} 
            to={finalPath} 
            className={styles.card}
            {...(isExternalLink(t.to) && { 
              target: "_blank",
            })}
          >
            <div className={styles.badge} aria-hidden="true">✦</div>
            <h3 className={styles.title}>{t.title}</h3>
            <p className={styles.body}>{t.body}</p>
            <div className={styles.footer}>
              <span className={styles.cta}>{t.cta}</span>
              <span className={styles.arrow} aria-hidden="true">→</span>
            </div>
          </DocLink>
      );
      })}
    </div>
  );
}