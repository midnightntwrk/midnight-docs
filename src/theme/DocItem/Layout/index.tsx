import React, { type ReactNode } from "react";
import clsx from "clsx";
import { useWindowSize } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import DocItemPaginator from "@theme/DocItem/Paginator";
import DocVersionBanner from "@theme/DocVersionBanner";
import DocVersionBadge from "@theme/DocVersionBadge";
import DocItemFooter from "@theme/DocItem/Footer";
import DocItemTOCMobile from "@theme/DocItem/TOC/Mobile";
import DocItemTOCDesktop from "@theme/DocItem/TOC/Desktop";
import DocItemContent from "@theme/DocItem/Content";
import DocBreadcrumbs from "@theme/DocBreadcrumbs";
import EditThisPage from "@theme/EditThisPage";
import styles from "./styles.module.css";
import DocTools from "@site/src/components/DocTools";

function useDocTOC() {
  const { frontMatter, toc } = useDoc();
  const windowSize = useWindowSize();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;
  const mobile = canRender ? <DocItemTOCMobile /> : undefined;
  const desktop =
    canRender && (windowSize === "desktop" || windowSize === "ssr") ? (
      <DocItemTOCDesktop />
    ) : undefined;
  return { hidden, mobile, desktop };
}

export default function DocItemLayout({ children }) {
  const docTOC = useDocTOC();
  const { metadata, frontMatter } = useDoc();
  const { editUrl, unversionedId } = metadata as any;
  const showTools =
    unversionedId !== "index" && !unversionedId?.endsWith("/index");

  const techArticleSchemaType = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: metadata?.title || frontMatter?.title,
    author: {
      "@type":
        metadata?.lastUpdatedBy || frontMatter?.last_update?.author
          ? "Person"
          : "Organization",
      name:
        metadata?.lastUpdatedBy ||
        frontMatter?.last_update?.author ||
        "Midnight"
    },
    datePublished: metadata?.lastUpdatedAt
      ? new Date(metadata?.lastUpdatedAt).toISOString()
      : frontMatter?.last_update?.date
        ? new Date(frontMatter?.last_update?.date).toISOString()
        : "",
    // proficiencyLevel: undefined,
    // dependencies: undefined,
    description: metadata?.description || frontMatter?.description
    // image: undefined
  };

  return (
    <div className="row">
      <div className={clsx("col", !docTOC.hidden && styles.docItemCol)}>
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(techArticleSchemaType).replace(
                  /</g,
                  "\\u003c"
                )
              }}
            />
            <div className={styles.breadcrumbsRow}>
              <div className={styles.breadcrumbsLeft}>
                {children?.type?.metadata?.sourceDirName !== "." && (
                  <DocBreadcrumbs />
                )}
              </div>
              <div className={styles.breadcrumbsRight}>
                <DocVersionBadge />
                {showTools && <DocTools />}
              </div>
            </div>
            {editUrl && <div className={styles.topMeta}></div>}
            {docTOC.mobile}

            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
        </div>
      </div>
      {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
    </div>
  );
}
