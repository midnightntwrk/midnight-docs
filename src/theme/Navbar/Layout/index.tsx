import React, { PropsWithChildren, useEffect, useState } from "react";
import clsx from "clsx";
import { useThemeConfig } from "@docusaurus/theme-common";
import {
  useHideableNavbar,
  useNavbarMobileSidebar
} from "@docusaurus/theme-common/internal";
import { translate } from "@docusaurus/Translate";
import NavbarMobileSidebar from "@theme/Navbar/MobileSidebar";
import { useBlogPost } from "@docusaurus/plugin-content-blog/lib/client/contexts.js";
import { useLocation } from "@docusaurus/router";
import styles from "./styles.module.css";

function NavbarBackdrop(props) {
  return (
    <div
      role="presentation"
      {...props}
      className={clsx("navbar-sidebar__backdrop", props.className)}
    />
  );
}
export default function NavbarLayout({ children }: PropsWithChildren) {
  const {
    navbar: { hideOnScroll, style }
  } = useThemeConfig();
  const mobileSidebar = useNavbarMobileSidebar();
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);

  // Schema
  const [techArticleSchemaType, setSchemaData] = useState<Object | null>(null);
  const location = useLocation().pathname;

  if (
    location.includes("/blog") &&
    location !== "/blog" &&
    !location.includes("/index")
  ) {
    const { metadata, frontMatter } = useBlogPost();

    const getProdUrl = (path = "/"): string => {
      const baseUrl = "https://docs.midnight.network";
      return new URL(path, baseUrl).href;
    };

    useEffect(() => {
      setSchemaData({
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: metadata?.title || frontMatter?.title,
        author: {
          "@type": "Person",
          name: metadata?.authors[0].name || frontMatter?.authors || "Midnight"
        },
        datePublished: metadata?.date
          ? new Date(metadata?.date).toISOString()
          : frontMatter?.date
            ? new Date(frontMatter?.date).toISOString()
            : "",
        // proficiencyLevel: undefined,
        // dependencies: undefined,
        description: metadata?.description || frontMatter?.description,
        image: getProdUrl(frontMatter?.image)
      });
    }, [location]);
  }

  return (
    <nav
      ref={navbarRef}
      aria-label={translate({
        id: "theme.NavBar.navAriaLabel",
        message: "Main",
        description: "The ARIA label for the main navigation"
      })}
      style={{ borderBottom: "1px solid #999" }}
      className={clsx(
        "navbar",
        "navbar--fixed-top",
        hideOnScroll && [
          styles.navbarHideable,
          !isNavbarVisible && styles.navbarHidden
        ],
        {
          "navbar--dark": style === "dark",
          "navbar--primary": style === "primary",
          "navbar-sidebar--show": mobileSidebar.shown
        }
      )}
    >
      {children}
      <NavbarBackdrop onClick={mobileSidebar.toggle} />
      <NavbarMobileSidebar />
      {techArticleSchemaType && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(techArticleSchemaType).replace(
              /</g,
              "\\u003c"
            )
          }}
        />
      )}
    </nav>
  );
}
