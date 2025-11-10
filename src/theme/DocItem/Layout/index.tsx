import React from "react";
import clsx from "clsx";
import { useWindowSize } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/theme-common/internal";
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
  const { metadata } = useDoc();
  const { editUrl, unversionedId } = metadata;
  const showTools = unversionedId !== "index" && !unversionedId?.endsWith("/index");

  return (
    <div className="row">
      <div className={clsx("col", !docTOC.hidden && styles.docItemCol)}>
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            {children?.type?.metadata?.sourceDirName !== "." && <DocBreadcrumbs />}
            <DocVersionBadge />
            {editUrl && (
              <div className={styles.topMeta}>
              </div>
            )}
            {docTOC.mobile}

            {showTools && (
              <div style={{ margin: "8px 0 12px" }}>
                <DocTools />
              </div>
            )}

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
