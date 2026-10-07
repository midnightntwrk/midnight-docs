import React, { useEffect, useState, type ReactNode } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useDoc, useDocsVersion } from "@docusaurus/plugin-content-docs/client";
import IconCopy from "@theme/Icon/Copy";
import IconSuccess from "@theme/Icon/Success";
import styles from "./styles.module.css";

type Status = "idle" | "copied" | "missing" | "failed";

const MISSING_MESSAGE =
  process.env.NODE_ENV === "development"
    ? "Markdown files only exist in a production build."
    : "This page has no Markdown version.";

// The llms.txt plugin writes a Markdown file next to every page it indexes.
// "/guides/deploy" has "/guides/deploy.md", and the home page has "/index.md".
function markdownUrl(permalink: string, baseUrl: string): string {
  return permalink === baseUrl
    ? `${baseUrl}index.md`
    : `${permalink.replace(/\/$/, "")}.md`;
}

async function writeToClipboard(text: Promise<string>): Promise<void> {
  // Safari and Firefox reject a clipboard write that starts more than about
  // five seconds after the click, which a slow download can exceed. Handing the
  // pending download to the clipboard inside the click handler avoids that.
  if (navigator.clipboard?.write && typeof ClipboardItem !== "undefined") {
    try {
      const blob = text.then(
        (value) => new Blob([value], { type: "text/plain" })
      );
      await navigator.clipboard.write([
        new ClipboardItem({ "text/plain": blob })
      ]);
      return;
    } catch {
      // Fall through to writeText. If the download itself failed, awaiting
      // it below throws again.
    }
  }
  const value = await text;
  await navigator.clipboard.writeText(value);
}

/**
 * The "Copy page as Markdown" page action. Returns the button and its status
 * message separately so the layout can put the message on a line of its own.
 */
export function useCopyPageAsMarkdown(): {
  button: ReactNode;
  status: ReactNode;
} {
  const { siteConfig } = useDocusaurusContext();
  const { metadata } = useDoc();
  const { isLast } = useDocsVersion();
  const [status, setStatus] = useState<Status>("idle");
  // Counts successful copies, so a second click restarts the 2 s timer.
  const [copies, setCopies] = useState(0);
  const url = markdownUrl(metadata.permalink, siteConfig.baseUrl);

  useEffect(() => {
    if (status !== "copied") {
      return undefined;
    }
    const timer = window.setTimeout(() => setStatus("idle"), 2000);
    return () => window.clearTimeout(timer);
  }, [status, copies]);

  // The plugin skips older docs versions, so those pages have nothing to copy.
  if (!isLast) {
    return { button: null, status: null };
  }

  async function copy() {
    let missing = false;
    const markdown = fetch(url).then((response) => {
      const type = response.headers.get("content-type") ?? "";
      // A page without a Markdown file answers 404 on the live site.
      // The dev server answers 200 with the HTML app shell instead.
      missing =
        response.status === 404 || (response.ok && type.includes("text/html"));
      if (missing || !response.ok) {
        throw new Error(`${url} answered ${response.status}`);
      }
      return response.text();
    });
    try {
      await writeToClipboard(markdown);
      setStatus("copied");
      setCopies((count) => count + 1);
    } catch {
      setStatus(missing ? "missing" : "failed");
    }
  }

  const copied = status === "copied";
  const hasMessage = status === "missing" || status === "failed";

  return {
    button: (
      <button
        type="button"
        className={clsx("button button--sm", styles.button)}
        onClick={copy}
      >
        {/* Both labels share one grid cell so the button keeps its width. */}
        <span className={styles.labels}>
          <span className={clsx(styles.label, copied && styles.hidden)}>
            <IconCopy className={styles.icon} aria-hidden="true" />
            Copy page as Markdown
          </span>
          <span className={clsx(styles.label, !copied && styles.hidden)}>
            <IconSuccess className={styles.icon} aria-hidden="true" />
            Copied
          </span>
        </span>
      </button>
    ),
    status: (
      <span
        role="status"
        className={hasMessage ? styles.message : styles.screenReaderOnly}
      >
        {copied && "Copied to clipboard"}
        {status === "missing" && MISSING_MESSAGE}
        {status === "failed" && (
          <>
            Copy failed.{" "}
            <a href={url} target="_blank" rel="noopener noreferrer">
              Open the Markdown file
            </a>
          </>
        )}
      </span>
    )
  };
}
