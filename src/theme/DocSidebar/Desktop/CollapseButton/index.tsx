import React from "react";
import clsx from "clsx";
import { translate } from "@docusaurus/Translate";
import styles from "./styles.module.css";
import CollapseArrow from "@site/src/components/svg/CollapseArrow";

import type { Props } from "@theme/DocSidebar/Desktop/CollapseButton";

export default function CollapseButton({ onClick }: Props) {
  return (
    <button
      type="button"
      title={translate({
        id: "theme.docs.sidebar.collapseButtonTitle",
        message: "Collapse sidebar",
        description: "The title attribute for collapse button of doc sidebar"
      })}
      aria-label={translate({
        id: "theme.docs.sidebar.collapseButtonAriaLabel",
        message: "Collapse sidebar",
        description: "The title attribute for collapse button of doc sidebar"
      })}
      className={clsx(
        "button button--secondary button--outline",
        styles.collapseSidebarButton
      )}
      onClick={onClick}
    >
      <CollapseArrow className={styles.collapseSidebarButtonIcon} />
    </button>
  );
}
